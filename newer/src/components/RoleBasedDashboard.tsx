import { UserRole } from "./LoginPage";
import { Dashboard } from "./Dashboard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  Users, 
  Building2,
  CheckCircle,
  TrendingUp,
  AlertCircle,
  Bell,
  Download,
  Wand2,
  Sparkles
} from "lucide-react";

interface RoleBasedDashboardProps {
  userRole: UserRole;
  username: string;
}

export function RoleBasedDashboard({ userRole, username }: RoleBasedDashboardProps) {
  // Admin and Principal get full dashboard
  if (userRole === "admin" || userRole === "principal") {
    return <Dashboard />;
  }

  // Teacher Dashboard
  if (userRole === "teacher") {
    return <TeacherDashboard username={username} />;
  }

  // Student Dashboard
  if (userRole === "student") {
    return <StudentDashboard username={username} />;
  }

  return <Dashboard />;
}

function TeacherDashboard({ username }: { username: string }) {
  const teacherStats = [
    {
      title: "Classes This Week",
      value: "18",
      icon: BookOpen,
      description: "6 subjects across 3 batches",
      trend: "+2 from last week"
    },
    {
      title: "Free Periods",
      value: "4",
      icon: Clock,
      description: "Available for consultation",
      trend: "Today's schedule"
    },
    {
      title: "Pending Requests",
      value: "2",
      icon: AlertCircle,
      description: "Schedule change requests",
      trend: "Awaiting approval"
    },
    {
      title: "Students",
      value: "156",
      icon: Users,
      description: "Total enrolled students",
      trend: "Across all batches"
    }
  ];

  const upcomingClasses = [
    {
      id: 1,
      subject: "Data Structures",
      time: "10:15 AM - 11:15 AM",
      room: "Room 101",
      batch: "CSE-A",
      status: "upcoming"
    },
    {
      id: 2,
      subject: "Database Lab",
      time: "2:15 PM - 4:15 PM",
      room: "Lab 201",
      batch: "CSE-B",
      status: "upcoming"
    },
    {
      id: 3,
      subject: "Computer Networks",
      time: "11:15 AM - 12:15 PM",
      room: "Room 102",
      batch: "CSE-A",
      status: "tomorrow"
    }
  ];

  const recentRequests = [
    {
      id: 1,
      type: "Room Change",
      details: "Lab 201 → Lab 202 for Database practical",
      status: "pending",
      submittedAt: "2 hours ago"
    },
    {
      id: 2,
      type: "Time Reschedule",
      details: "Move Tuesday 2 PM class to 3 PM",
      status: "approved",
      submittedAt: "1 day ago"
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-medium text-gray-900">Welcome back, {username}</h1>
          <p className="text-gray-500 mt-1">Here's your teaching schedule and updates</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            My Schedule
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teacherStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="bg-white border-[#e0e0e0] shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-semibold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <p className="text-xs text-gray-500 mb-1">
                  {stat.description}
                </p>
                <p className="text-xs text-blue-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {stat.trend}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Classes */}
        <Card className="bg-white border-[#e0e0e0] shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Today's Classes
            </CardTitle>
            <CardDescription>Your upcoming teaching schedule</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingClasses.map((class_) => (
              <div key={class_.id} className="flex items-center justify-between p-3 bg-[#f5f5f5] rounded-lg">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{class_.subject}</h3>
                  <p className="text-sm text-gray-500">{class_.batch} • {class_.room}</p>
                  <p className="text-sm text-gray-600">{class_.time}</p>
                </div>
                <Badge variant={class_.status === "upcoming" ? "default" : "secondary"}>
                  {class_.status === "upcoming" ? "Today" : "Tomorrow"}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Requests */}
        <Card className="bg-white border-[#e0e0e0] shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Recent Requests
            </CardTitle>
            <CardDescription>Your schedule change requests</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentRequests.map((request) => (
              <div key={request.id} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  {request.status === 'approved' ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <Clock className="h-5 w-5 text-yellow-500" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{request.type}</p>
                  <p className="text-sm text-gray-500">{request.details}</p>
                  <p className="text-xs text-gray-400">{request.submittedAt}</p>
                </div>
                <div className="flex-shrink-0">
                  <Badge variant={request.status === 'approved' ? 'secondary' : 'outline'}>
                    {request.status}
                  </Badge>
                </div>
              </div>
            ))}
            <div className="pt-2">
              <Button variant="outline" size="sm" className="w-full">
                Submit New Request
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function StudentDashboard({ username }: { username: string }) {
  const studentStats = [
    {
      title: "Classes Today",
      value: "6",
      icon: BookOpen,
      description: "Including 1 lab session",
      trend: "Same as yesterday"
    },
    {
      title: "Next Class",
      value: "2:15 PM",
      icon: Clock,
      description: "Database Systems",
      trend: "Room 102"
    },
    {
      title: "Free Period",
      value: "1 Hour",
      icon: Users,
      description: "12:15 PM - 1:15 PM",
      trend: "Lunch break"
    },
    {
      title: "Attendance",
      value: "94%",
      icon: CheckCircle,
      description: "This semester",
      trend: "Excellent standing"
    }
  ];

  const todaySchedule = [
    {
      id: 1,
      subject: "Operating Systems",
      time: "9:00 AM - 10:00 AM",
      room: "Room 103",
      faculty: "Dr. Emily Rodriguez",
      type: "lecture"
    },
    {
      id: 2,
      subject: "Data Structures",
      time: "10:15 AM - 11:15 AM",
      room: "Room 101",
      faculty: "Dr. Sarah Johnson",
      type: "lecture"
    },
    {
      id: 3,
      subject: "Database Lab",
      time: "2:15 PM - 4:15 PM",
      room: "Lab 201",
      faculty: "Prof. Michael Chen",
      type: "lab"
    },
    {
      id: 4,
      subject: "Software Engineering",
      time: "4:30 PM - 5:30 PM",
      room: "Room 105",
      faculty: "Prof. David Lee",
      type: "lecture"
    }
  ];

  const announcements = [
    {
      id: 1,
      title: "Lab Session Moved",
      content: "Database Lab on Thursday moved to Lab 202",
      time: "2 hours ago",
      type: "schedule"
    },
    {
      id: 2,
      title: "Assignment Due",
      content: "Data Structures assignment due this Friday",
      time: "1 day ago",
      type: "academic"
    },
    {
      id: 3,
      title: "Exam Schedule",
      content: "Mid-semester exams start next week",
      time: "2 days ago",
      type: "exam"
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-medium text-gray-900">Welcome, {username}</h1>
          <p className="text-gray-500 mt-1">Here's your class schedule and updates</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Timetable
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {studentStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="bg-white border-[#e0e0e0] shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-semibold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <p className="text-xs text-gray-500 mb-1">
                  {stat.description}
                </p>
                <p className="text-xs text-green-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {stat.trend}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <Card className="lg:col-span-2 bg-white border-[#e0e0e0] shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Today's Schedule
            </CardTitle>
            <CardDescription>Your classes for today</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {todaySchedule.map((class_) => (
              <div key={class_.id} className="flex items-center justify-between p-4 bg-[#f5f5f5] rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-gray-900">{class_.subject}</h3>
                    <Badge variant={class_.type === "lab" ? "secondary" : "outline"} className="text-xs">
                      {class_.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500">{class_.faculty}</p>
                  <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {class_.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <Building2 className="h-3 w-3" />
                      {class_.room}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Announcements */}
        <Card className="bg-white border-[#e0e0e0] shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Announcements
            </CardTitle>
            <CardDescription>Recent updates and notices</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="p-3 bg-[#f5f5f5] rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-sm text-gray-900">{announcement.title}</h4>
                  <Badge variant="outline" className="text-xs">
                    {announcement.type}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2">{announcement.content}</p>
                <p className="text-xs text-gray-400">{announcement.time}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}