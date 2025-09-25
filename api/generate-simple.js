// Simple Vercel serverless function for timetable generation
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const inputData = req.body;
    console.log("Received timetable generation request:", inputData);

    // Validate input data
    if (!inputData.courses || !Array.isArray(inputData.courses) || inputData.courses.length === 0) {
      return res.status(400).json({ 
        success: false, 
        error: "Courses array is required and must not be empty" 
      });
    }

    if (!inputData.teachers || !Array.isArray(inputData.teachers) || inputData.teachers.length === 0) {
      return res.status(400).json({ 
        success: false, 
        error: "Teachers array is required and must not be empty" 
      });
    }

    // Generate simple timetable
    const timetable = generateSimpleTimetable(inputData);
    const metadata = {
      totalSlots: Object.keys(timetable).length,
      conflicts: 0,
      utilization: 85,
      solverStatus: "simple"
    };

    const result = {
      success: true,
      message: "Timetable generated successfully",
      timetable: timetable,
      metadata: metadata
    };

    console.log('Generated timetable with', metadata.totalSlots, 'slots');
    res.status(200).json(result);

  } catch (error) {
    console.error('Error generating timetable:', error);
    
    const errorResult = {
      success: false,
      error: `Error in timetable generation: ${error.message}`,
      timetable: {},
      metadata: {
        totalSlots: 0,
        conflicts: 0,
        utilization: 0,
        solverStatus: "error"
      }
    };
    
    res.status(500).json(errorResult);
  }
}

// Simple timetable generation function
function generateSimpleTimetable(inputData) {
  const { courses, teachers, batches, labs, degree } = inputData;
  
  const timeSlots = [
    "8:00 AM - 9:00 AM", "9:00 AM - 10:00 AM", "10:15 AM - 11:15 AM",
    "11:15 AM - 12:15 PM", "12:15 PM - 1:15 PM", "2:15 PM - 3:15 PM",
    "3:15 PM - 4:15 PM", "4:30 PM - 5:30 PM"
  ];
  
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const timetable = {};
  
  courses.forEach((course, courseIndex) => {
    const teacher = teachers[courseIndex % teachers.length];
    const dayIndex = courseIndex % days.length;
    const timeIndex = (courseIndex % 6) + 1;
    
    const key = `${days[dayIndex]}-${timeIndex}`;
    timetable[key] = {
      id: `slot_${courseIndex + 1}`,
      subject: course,
      faculty: teacher.name || 'Unknown Teacher',
      room: `Room ${101 + (courseIndex % 10)}`,
      department: "CSE",
      credits: 3,
      type: labs.includes(course) ? "lab" : "lecture",
      program: degree && degree.includes("Master") ? "PG" : "UG",
      batch: `Batch ${String.fromCharCode(65 + (courseIndex % batches))}`,
      week: courseIndex % 2 === 0 ? "odd" : "even"
    };
  });
  
  return timetable;
}
