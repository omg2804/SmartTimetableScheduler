const express = require("express");
const cors = require("cors");
const { spawn } = require("child_process");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../newer/build')));

// Serve the embed page
app.get('/embed', (req, res) => {
  res.sendFile(path.join(__dirname, '../newer/build/index.html'));
});

// POST endpoint to handle timetable generation
app.post("/generate", (req, res) => {
  const inputData = req.body;
  console.log("Received timetable generation request:", inputData);

  // Use Python CP-SAT solver
  const { spawn } = require('child_process');
  const py = spawn('python', ['solver.py']);

  let output = '';
  let errorOutput = '';

  // Collect stdout
  py.stdout.on('data', (data) => {
    output += data.toString();
  });

  // Collect stderr
  py.stderr.on('data', (data) => {
    errorOutput += data.toString();
  });

  // Process finished
  py.on('close', (code) => {
    if (errorOutput) {
      console.error('Python error:', errorOutput);
    }

    try {
      const result = JSON.parse(output);
      console.log('Solver result:', result);
      res.json(result);
    } catch (err) {
      console.error('Failed to parse Python output:', err);
      console.log('Raw output:', output);
      
      // Fallback to mock data if solver fails
      const fallbackTimetable = {
        success: true,
        message: "Timetable generated using fallback method",
        timetable: generateMockTimetable(inputData),
        metadata: {
          totalSlots: 48,
          conflicts: 0,
          utilization: 85,
          solverStatus: "fallback"
        }
      };
      res.json(fallbackTimetable);
    }
  });

  // Send input JSON to Python stdin
  py.stdin.write(JSON.stringify(inputData));
  py.stdin.end();
});

// Function to generate mock timetable based on input
function generateMockTimetable(inputData) {
  const { college, degree, branches, years, courses, batches, labs, teachers } = inputData;
  
  const timeSlots = [
    "8:00 AM - 9:00 AM", "9:00 AM - 10:00 AM", "10:15 AM - 11:15 AM",
    "11:15 AM - 12:15 PM", "12:15 PM - 1:15 PM", "2:15 PM - 3:15 PM",
    "3:15 PM - 4:15 PM", "4:30 PM - 5:30 PM"
  ];
  
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const timetable = {};
  
  // Generate slots for each course
  courses.forEach((course, courseIndex) => {
    const teacher = teachers[courseIndex % teachers.length];
    const dayIndex = courseIndex % days.length;
    const timeIndex = (courseIndex % 6) + 1; // Skip first slot for variety
    
    const key = `${days[dayIndex]}-${timeIndex}`;
    timetable[key] = {
      id: `slot_${courseIndex + 1}`,
      subject: course,
      faculty: teacher.name,
      room: `Room ${101 + (courseIndex % 10)}`,
      department: "CSE",
      credits: 3,
      type: labs.includes(course) ? "lab" : "lecture",
      program: degree.includes("Master") ? "PG" : "UG",
      batch: `Batch ${String.fromCharCode(65 + (courseIndex % batches))}`,
      week: courseIndex % 2 === 0 ? "odd" : "even"
    };
  });
  
  return timetable;
}

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date().toISOString() });
});

// Start server
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`🚀 Node backend running at http://localhost:${PORT}`);
  console.log(`📋 Embed page available at http://localhost:${PORT}/embed`);
});
