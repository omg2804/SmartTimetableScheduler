import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Switch } from "./ui/switch";
import { motion, AnimatePresence } from "motion/react";
import { 
  Filter,
  Clock,
  MapPin,
  User,
  Calendar,
  BookOpen,
  Brain,
  CheckCircle,
  GraduationCap
} from "lucide-react";

interface TimetableSlot {
  id: string;
  subject: string;
  faculty: string;
  room: string;
  department: string;
  credits: number;
  type: "lecture" | "lab" | "tutorial" | "quiz" | "elective";
  program: "UG" | "PG";
  batch: string;
  week: "odd" | "even" | "both";
}

interface UpcomingQuiz {
  id: string;
  subject: string;
  date: string;
  time: string;
  room: string;
  faculty: string;
  type: "quiz" | "midterm" | "final";
  program: "UG" | "PG";
}

interface ElectiveCourse {
  id: string;
  name: string;
  faculty: string;
  credits: number;
  program: "UG" | "PG";
  enrolled: number;
  capacity: number;
  schedule: string;
}

interface WorkToDo {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  type: "assignment" | "project" | "presentation" | "report";
  subject: string;
  priority: "high" | "medium" | "low";
  program: "UG" | "PG";
}

const timeSlots = [
  "8:00 AM - 9:00 AM",
  "9:00 AM - 10:00 AM",
  "10:15 AM - 11:15 AM",
  "11:15 AM - 12:15 PM",
  "12:15 PM - 1:15 PM",
  "2:15 PM - 3:15 PM",
  "3:15 PM - 4:15 PM",
  "4:30 PM - 5:30 PM"
];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Mock data (same as TimetableGrid)
const mockTimetableData: { [key: string]: TimetableSlot } = {
  "Monday-0": {
    id: "1",
    subject: "Data Structures",
    faculty: "Dr. Sarah Johnson",
    room: "Room 101",
    department: "CSE",
    credits: 3,
    type: "lecture",
    program: "UG",
    batch: "CSE-A",
    week: "both"
  },
  "Monday-2": {
    id: "2",
    subject: "Database Lab",
    faculty: "Prof. Michael Chen",
    room: "Lab 201",
    department: "CSE",
    credits: 2,
    type: "lab",
    program: "UG",
    batch: "CSE-A",
    week: "odd"
  },
  "Tuesday-1": {
    id: "3",
    subject: "Advanced Algorithms",
    faculty: "Dr. Emily Rodriguez",
    room: "Room 102",
    department: "CSE",
    credits: 3,
    type: "lecture",
    program: "PG",
    batch: "M.Tech-CSE",
    week: "both"
  },
  "Tuesday-3": {
    id: "4",
    subject: "Software Engineering",
    faculty: "Prof. David Lee",
    room: "Room 103",
    department: "CSE",
    credits: 3,
    type: "lecture",
    program: "UG",
    batch: "CSE-A",
    week: "both"
  },
  "Wednesday-0": {
    id: "5",
    subject: "Machine Learning Quiz",
    faculty: "Dr. Emily Rodriguez",
    room: "Room 104",
    department: "CSE",
    credits: 0,
    type: "quiz",
    program: "PG",
    batch: "M.Tech-CSE",
    week: "even"
  },
  "Thursday-2": {
    id: "7",
    subject: "AI Elective",
    faculty: "Dr. Emily Rodriguez",
    room: "Room 105",
    department: "CSE",
    credits: 3,
    type: "elective",
    program: "UG",
    batch: "CSE-A",
    week: "both"
  },
  "Friday-1": {
    id: "8",
    subject: "Web Development Lab",
    faculty: "Prof. Michael Chen",
    room: "Lab 202",
    department: "CSE",
    credits: 2,
    type: "lab",
    program: "UG",
    batch: "CSE-A",
    week: "even"
  }
};

const mockUpcomingQuizzes: UpcomingQuiz[] = [
  {
    id: "q1",
    subject: "Data Structures",
    date: "2024-01-15",
    time: "10:00 AM",
    room: "Room 101",
    faculty: "Dr. Sarah Johnson",
    type: "quiz",
    program: "UG"
  },
  {
    id: "q2",
    subject: "Machine Learning",
    date: "2024-01-18",
    time: "2:00 PM",
    room: "Room 105",
    faculty: "Dr. Emily Rodriguez",
    type: "midterm",
    program: "PG"
  }
];

const mockElectiveCourses: ElectiveCourse[] = [
  {
    id: "e1",
    name: "Artificial Intelligence",
    faculty: "Dr. Emily Rodriguez",
    credits: 3,
    program: "UG",
    enrolled: 45,
    capacity: 50,
    schedule: "Mon, Wed, Fri - 2:15 PM"
  },
  {
    id: "e2",
    name: "Blockchain Technology",
    faculty: "Prof. David Lee",
    credits: 3,
    program: "PG",
    enrolled: 28,
    capacity: 30,
    schedule: "Tue, Thu - 3:15 PM"
  }
];

const mockWorkToDo: WorkToDo[] = [
  {
    id: "w1",
    title: "Data Structures Assignment 3",
    description: "Implement Binary Search Tree operations",
    dueDate: "2024-01-20",
    type: "assignment",
    subject: "Data Structures",
    priority: "high",
    program: "UG"
  },
  {
    id: "w2",
    title: "ML Project Presentation",
    description: "Present findings on image classification model",
    dueDate: "2024-01-25",
    type: "presentation",
    subject: "Machine Learning",
    priority: "high",
    program: "PG"
  }
];

export function EmbeddableTimetable() {
  const [selectedBatch, setSelectedBatch] = useState("cse-a");
  const [selectedFaculty, setSelectedFaculty] = useState("all");
  const [selectedRoom, setSelectedRoom] = useState("all");
  const [selectedProgram, setSelectedProgram] = useState<"UG" | "PG" | "both">("both");
  const [currentWeek, setCurrentWeek] = useState<"odd" | "even">("odd");
  const [activeTab, setActiveTab] = useState<"timetable" | "quizzes" | "electives" | "work">("timetable");

  const getSlotData = (day: string, timeIndex: number): TimetableSlot | null => {
    const slot = mockTimetableData[`${day}-${timeIndex}`];
    if (!slot) return null;
    
    // Filter by program
    if (selectedProgram !== "both" && slot.program !== selectedProgram) {
      return null;
    }
    
    // Filter by week (biweekly switching)
    if (slot.week !== "both" && slot.week !== currentWeek) {
      return null;
    }
    
    // Filter by batch
    if (selectedBatch !== "all" && slot.batch !== selectedBatch) {
      return null;
    }
    
    return slot;
  };

  const getSlotTypeColor = (type: string) => {
    switch (type) {
      case "lecture":
        return "bg-blue-50 border-blue-200 text-blue-800";
      case "lab":
        return "bg-green-50 border-green-200 text-green-800";
      case "tutorial":
        return "bg-purple-50 border-purple-200 text-purple-800";
      case "quiz":
        return "bg-red-50 border-red-200 text-red-800";
      case "elective":
        return "bg-orange-50 border-orange-200 text-orange-800";
      default:
        return "bg-gray-50 border-gray-200 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50/30 to-red-50/20 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Academic Timetable</h1>
          <p className="text-gray-600">Comprehensive schedule management with UG+PG support</p>
        </div>

        {/* Tab Navigation */}
        <Card className="bg-white/90 backdrop-blur-sm border-red-200/50 shadow-lg">
          <CardContent className="p-4">
            <div className="flex space-x-1 justify-center">
              {[
                { id: "timetable", label: "Timetable", icon: Calendar },
                { id: "quizzes", label: "Quizzes", icon: Brain },
                { id: "electives", label: "Electives", icon: BookOpen },
                { id: "work", label: "Tasks", icon: CheckCircle }
              ].map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 ${
                    activeTab === tab.id 
                      ? "bg-gradient-to-r from-red-500 to-orange-600 text-white" 
                      : "hover:bg-red-50"
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Biweekly Switch */}
        <Card className="bg-white/90 backdrop-blur-sm border-red-200/50 shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center justify-center gap-4">
              <span className="text-sm font-medium text-gray-700">Current Week:</span>
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  currentWeek === "odd" 
                    ? "bg-red-100 text-red-800" 
                    : "bg-gray-100 text-gray-600"
                }`}>
                  Odd Week
                </span>
                <Switch
                  checked={currentWeek === "even"}
                  onCheckedChange={(checked) => setCurrentWeek(checked ? "even" : "odd")}
                />
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  currentWeek === "even" 
                    ? "bg-orange-100 text-orange-800" 
                    : "bg-gray-100 text-gray-600"
                }`}>
                  Even Week
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filters */}
        <Card className="bg-white/90 backdrop-blur-sm border-red-200/50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2 text-gray-900 justify-center">
              <Filter className="h-5 w-5 text-red-600" />
              Filters & View Options
            </CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4 flex-wrap justify-center">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600">Program</label>
              <Select value={selectedProgram} onValueChange={(value: any) => setSelectedProgram(value)}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="both">Both UG+PG</SelectItem>
                  <SelectItem value="UG">Undergraduate</SelectItem>
                  <SelectItem value="PG">Postgraduate</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600">Batch</label>
              <Select value={selectedBatch} onValueChange={setSelectedBatch}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Batches</SelectItem>
                  <SelectItem value="CSE-A">CSE Batch A</SelectItem>
                  <SelectItem value="CSE-B">CSE Batch B</SelectItem>
                  <SelectItem value="M.Tech-CSE">M.Tech CSE</SelectItem>
                  <SelectItem value="IT-A">IT Batch A</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600">Faculty</label>
              <Select value={selectedFaculty} onValueChange={setSelectedFaculty}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Faculty</SelectItem>
                  <SelectItem value="sarah">Dr. Sarah Johnson</SelectItem>
                  <SelectItem value="michael">Prof. Michael Chen</SelectItem>
                  <SelectItem value="emily">Dr. Emily Rodriguez</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Content based on active tab */}
        <AnimatePresence mode="wait">
          {activeTab === "timetable" && (
            <motion.div
              key="timetable"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderTimetableGrid()}
            </motion.div>
          )}
          {activeTab === "quizzes" && (
            <motion.div
              key="quizzes"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderUpcomingQuizzes()}
            </motion.div>
          )}
          {activeTab === "electives" && (
            <motion.div
              key="electives"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderElectiveCourses()}
            </motion.div>
          )}
          {activeTab === "work" && (
            <motion.div
              key="work"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderWorkToDo()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );

  // Render Functions
  function renderTimetableGrid() {
    return (
      <Card className="bg-white/90 backdrop-blur-sm border-red-200/50 shadow-lg">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              {/* Header */}
              <div className="grid grid-cols-7 border-b border-[#e0e0e0]">
                <div className="p-3 bg-[#f5f5f5] font-medium text-gray-700 border-r border-[#e0e0e0] text-sm">
                  Time
                </div>
                {days.map((day) => (
                  <div key={day} className="p-3 bg-[#f5f5f5] font-medium text-gray-700 text-center border-r border-[#e0e0e0] last:border-r-0 text-sm">
                    {day.slice(0, 3)}
                  </div>
                ))}
              </div>

              {/* Time Slots */}
              {timeSlots.map((timeSlot, timeIndex) => (
                <div key={timeIndex} className="grid grid-cols-7 border-b border-[#e0e0e0] last:border-b-0">
                  <div className="p-3 bg-[#f5f5f5] font-medium text-gray-700 text-xs border-r border-[#e0e0e0] flex items-center">
                    <Clock className="h-3 w-3 mr-1 text-gray-400" />
                    {timeSlot}
                  </div>
                  {days.map((day) => {
                    const slotData = getSlotData(day, timeIndex);
                    return (
                      <div key={day} className="border-r border-[#e0e0e0] last:border-r-0 min-h-[60px]">
                        {slotData ? (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className={`h-full p-2 cursor-pointer hover:shadow-sm transition-shadow ${getSlotTypeColor(slotData.type)} border-l-4`}>
                                  <div className="font-medium text-xs mb-1">{slotData.subject}</div>
                                  {slotData.faculty && (
                                    <div className="text-xs flex items-center gap-1 mb-1">
                                      <User className="h-2 w-2" />
                                      {slotData.faculty.split(' ')[0]}
                                    </div>
                                  )}
                                  {slotData.room && (
                                    <div className="text-xs flex items-center gap-1">
                                      <MapPin className="h-2 w-2" />
                                      {slotData.room}
                                    </div>
                                  )}
                                  <div className="flex gap-1 mt-1">
                                    <Badge variant="secondary" className="text-xs px-1 py-0">
                                      {slotData.type.slice(0, 3)}
                                    </Badge>
                                    <Badge variant="outline" className="text-xs px-1 py-0">
                                      {slotData.program}
                                    </Badge>
                                  </div>
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <div className="space-y-1">
                                  <p className="font-medium">{slotData.subject}</p>
                                  <p className="text-sm">Faculty: {slotData.faculty}</p>
                                  <p className="text-sm">Room: {slotData.room}</p>
                                  <p className="text-sm">Program: {slotData.program}</p>
                                  <p className="text-sm">Batch: {slotData.batch}</p>
                                </div>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        ) : (
                          <div className="h-full bg-[#f0f0f0] hover:bg-gray-100 cursor-pointer transition-colors"></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  function renderUpcomingQuizzes() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockUpcomingQuizzes.map((quiz) => (
          <Card key={quiz.id} className="bg-white/90 backdrop-blur-sm border-red-200/50 shadow-lg">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Badge className={`${
                  quiz.type === "quiz" ? "bg-blue-100 text-blue-800" :
                  quiz.type === "midterm" ? "bg-orange-100 text-orange-800" :
                  "bg-red-100 text-red-800"
                }`}>
                  {quiz.type}
                </Badge>
                <Badge variant="outline">{quiz.program}</Badge>
              </div>
              <CardTitle className="text-base">{quiz.subject}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="h-4 w-4" />
                {quiz.date}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                {quiz.time}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4" />
                {quiz.room}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <User className="h-4 w-4" />
                {quiz.faculty}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  function renderElectiveCourses() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockElectiveCourses.map((course) => (
          <Card key={course.id} className="bg-white/90 backdrop-blur-sm border-red-200/50 shadow-lg">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Badge variant="outline">{course.program}</Badge>
                <Badge className="bg-green-100 text-green-800">{course.credits} Credits</Badge>
              </div>
              <CardTitle className="text-base">{course.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <User className="h-4 w-4" />
                {course.faculty}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                {course.schedule}
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Enrollment</span>
                <span className="font-medium">{course.enrolled}/{course.capacity}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(course.enrolled / course.capacity) * 100}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  function renderWorkToDo() {
    return (
      <div className="space-y-4">
        {mockWorkToDo.map((work) => (
          <Card key={work.id} className="bg-white/90 backdrop-blur-sm border-red-200/50 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={`${
                      work.priority === "high" ? "bg-red-100 text-red-800" :
                      work.priority === "medium" ? "bg-orange-100 text-orange-800" :
                      "bg-green-100 text-green-800"
                    }`}>
                      {work.priority}
                    </Badge>
                    <Badge variant="outline">{work.program}</Badge>
                    <Badge variant="secondary">{work.type}</Badge>
                  </div>
                  <h3 className="text-base font-medium text-gray-900 mb-1">{work.title}</h3>
                  <p className="text-gray-600 mb-2 text-sm">{work.description}</p>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Due: {work.dueDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-3 w-3" />
                      {work.subject}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
}
