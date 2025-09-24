import { useState, useEffect } from "react";
import { LandingPage } from "./components/LandingPage";
import { LoginPage, UserRole } from "./components/LoginPage";
import { LoadingScreen } from "./components/LoadingScreen";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { RoleBasedDashboard } from "./components/RoleBasedDashboard";
import { TimetableGrid } from "./components/TimetableGrid";
import { EmbeddableTimetable } from "./components/EmbeddableTimetable";
import { ApprovalWorkflow } from "./components/ApprovalWorkflow";
import { AIAssistant } from "./components/AIAssistant";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Users, Building, Settings } from "lucide-react";

type AppState = "landing" | "login" | "dashboard" | "embed";

interface User {
  role: UserRole;
  username: string;
}

export default function App() {
  const [appState, setAppState] = useState<AppState>("landing");
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isLoading, setIsLoading] = useState(true);

  // Check if this is an embed request
  useEffect(() => {
    const isEmbed = window.location.pathname === '/embed' || window.location.search.includes('embed=true');
    if (isEmbed) {
      setAppState("embed");
    }
  }, []);
  // Handle initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // 3.5 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => {
    setAppState("login");
  };

  const handleBackToLanding = () => {
    setAppState("landing");
  };

  const handleLogin = (userRole: UserRole, username: string) => {
    setUser({ role: userRole, username });
    setAppState("dashboard");
  };

  const handleLogout = () => {
    setUser(null);
    setActiveTab("dashboard");
    setAppState("landing");
  };

  const renderContent = () => {
    if (!user) return null;

    switch (activeTab) {
      case "dashboard":
        return <RoleBasedDashboard userRole={user.role} username={user.username} />;
      case "timetable":
        return <TimetableGrid />;
      case "faculty":
        return <FacultyAvailability />;
      case "rooms":
        return <ClassroomsLabs />;
      case "approvals":
        // Only show approvals for admin and principal
        if (user.role === "admin" || user.role === "principal") {
          return <ApprovalWorkflow />;
        }
        return <RoleBasedDashboard userRole={user.role} username={user.username} />;
      case "settings":
        return <SettingsPage />;
      default:
        return <RoleBasedDashboard userRole={user.role} username={user.username} />;
    }
  };

  // Show loading screen initially
  if (isLoading) {
    return <LoadingScreen />;
  }

  // Embed Page
  if (appState === "embed") {
    return <EmbeddableTimetable />;
  }

  // Landing Page
  if (appState === "landing") {
    return <LandingPage onGetStarted={handleGetStarted} />;
  }

  // Login Page
  if (appState === "login") {
    return <LoginPage onBack={handleBackToLanding} onLogin={handleLogin} />;
  }

  // Main Application (Dashboard)
  if (appState === "dashboard" && user) {
    return (
      <div className="h-screen flex flex-col bg-gradient-to-br from-gray-50 via-orange-50/30 to-red-50/20">
        <Header user={user} onLogout={handleLogout} />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            userRole={user.role}
          />
          <main className="flex-1 overflow-auto bg-gradient-to-br from-gray-50 via-orange-50/30 to-red-50/20">
            {renderContent()}
          </main>
        </div>
        {/* AI Assistant available when logged in */}
        <AIAssistant />
      </div>
    );
  }

  return <LandingPage onGetStarted={handleGetStarted} />;
}

// Placeholder components for other tabs with consistent red/orange styling
function FacultyAvailability() {
  return (
    <div className="p-6 space-y-6 min-h-full bg-gradient-to-br from-gray-50 via-orange-50/30 to-red-50/20">
      <div className="mb-8">
        <h1 className="text-3xl font-medium text-gray-900">Faculty Availability</h1>
        <p className="text-gray-600 mt-2">Manage faculty schedules and availability</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-white/90 backdrop-blur-sm border-red-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-red-300/70">
          <CardContent className="p-6">
            <div className="text-2xl font-medium text-gray-900">24</div>
            <div className="text-sm text-gray-600">Total Faculty</div>
          </CardContent>
        </Card>
        <Card className="bg-white/90 backdrop-blur-sm border-red-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-red-300/70">
          <CardContent className="p-6">
            <div className="text-2xl font-medium text-green-600">18</div>
            <div className="text-sm text-gray-600">Available</div>
          </CardContent>
        </Card>
        <Card className="bg-white/90 backdrop-blur-sm border-red-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-red-300/70">
          <CardContent className="p-6">
            <div className="text-2xl font-medium text-orange-600">4</div>
            <div className="text-sm text-gray-600">Busy</div>
          </CardContent>
        </Card>
        <Card className="bg-white/90 backdrop-blur-sm border-red-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-red-300/70">
          <CardContent className="p-6">
            <div className="text-2xl font-medium text-red-600">2</div>
            <div className="text-sm text-gray-600">On Leave</div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white/90 backdrop-blur-sm border-red-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-900">
            <Users className="h-5 w-5 text-red-600" />
            Faculty Schedule Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Dr. Sarah Johnson", department: "CSE", hours: "18/20", status: "Available", color: "green" },
              { name: "Prof. Michael Chen", department: "CSE", hours: "16/20", status: "Available", color: "green" },
              { name: "Dr. Emily Rodriguez", department: "CSE", hours: "15/20", status: "Busy", color: "orange" },
              { name: "Prof. David Lee", department: "IT", hours: "17/20", status: "Available", color: "green" },
              { name: "Dr. Maria Garcia", department: "IT", hours: "0/20", status: "On Leave", color: "red" },
              { name: "Prof. James Wilson", department: "Math", hours: "19/20", status: "Busy", color: "orange" },
            ].map((faculty, index) => (
              <Card key={index} className="border-red-200/50 hover:shadow-md hover:border-red-300/70 transition-all duration-200">
                <CardContent className="p-4">
                  <h3 className="font-medium text-gray-900">{faculty.name}</h3>
                  <p className="text-sm text-gray-600">{faculty.department}</p>
                  <p className="text-sm mt-2 text-gray-700">Hours: {faculty.hours}</p>
                  <Badge 
                    className={`mt-2 ${
                      faculty.color === "green" 
                        ? "bg-green-100 text-green-800 border-green-200" 
                        : faculty.color === "orange"
                        ? "bg-orange-100 text-orange-800 border-orange-200"
                        : "bg-red-100 text-red-800 border-red-200"
                    }`}
                  >
                    {faculty.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function ClassroomsLabs() {
  return (
    <div className="p-6 space-y-6 min-h-full bg-gradient-to-br from-gray-50 via-orange-50/30 to-red-50/20">
      <div className="mb-8">
        <h1 className="text-3xl font-medium text-gray-900">Classrooms & Labs</h1>
        <p className="text-gray-600 mt-2">Manage room bookings and availability</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-white/90 backdrop-blur-sm border-red-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-red-300/70">
          <CardContent className="p-6">
            <div className="text-2xl font-medium text-gray-900">32</div>
            <div className="text-sm text-gray-600">Total Rooms</div>
          </CardContent>
        </Card>
        <Card className="bg-white/90 backdrop-blur-sm border-red-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-red-300/70">
          <CardContent className="p-6">
            <div className="text-2xl font-medium text-red-600">18</div>
            <div className="text-sm text-gray-600">Classrooms</div>
          </CardContent>
        </Card>
        <Card className="bg-white/90 backdrop-blur-sm border-red-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-red-300/70">
          <CardContent className="p-6">
            <div className="text-2xl font-medium text-orange-600">12</div>
            <div className="text-sm text-gray-600">Computer Labs</div>
          </CardContent>
        </Card>
        <Card className="bg-white/90 backdrop-blur-sm border-red-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-red-300/70">
          <CardContent className="p-6">
            <div className="text-2xl font-medium text-green-600">85%</div>
            <div className="text-sm text-gray-600">Avg Utilization</div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white/90 backdrop-blur-sm border-red-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-900">
            <Building className="h-5 w-5 text-orange-600" />
            Room Utilization
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Room 101", capacity: "40", type: "Classroom", utilization: "85%", value: 85 },
              { name: "Room 102", capacity: "35", type: "Classroom", utilization: "75%", value: 75 },
              { name: "Lab 201", capacity: "30", type: "Computer Lab", utilization: "90%", value: 90 },
              { name: "Lab 202", capacity: "25", type: "Computer Lab", utilization: "60%", value: 60 },
              { name: "Seminar Hall A", capacity: "60", type: "Seminar Hall", utilization: "45%", value: 45 },
              { name: "Lab 301", capacity: "20", type: "Electronics Lab", utilization: "70%", value: 70 },
            ].map((room, index) => (
              <Card key={index} className="border-red-200/50 hover:shadow-md hover:border-red-300/70 transition-all duration-200">
                <CardContent className="p-4">
                  <h3 className="font-medium text-gray-900">{room.name}</h3>
                  <p className="text-sm text-gray-600">{room.type}</p>
                  <p className="text-sm text-gray-700">Capacity: {room.capacity} students</p>
                  <div className="mt-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Utilization</span>
                      <span className="text-gray-900 font-medium">{room.utilization}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${
                          room.value >= 80 ? 'bg-gradient-to-r from-green-500 to-green-600' : 
                          room.value >= 60 ? 'bg-gradient-to-r from-orange-500 to-orange-600' : 'bg-gradient-to-r from-red-500 to-red-600'
                        }`}
                        style={{ width: room.utilization }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function SettingsPage() {
  return (
    <div className="p-6 space-y-6 min-h-full bg-gradient-to-br from-gray-50 via-orange-50/30 to-red-50/20">
      <div className="mb-8">
        <h1 className="text-3xl font-medium text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-2">Configure system preferences and settings</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white/90 backdrop-blur-sm border-red-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900">
              <Settings className="h-5 w-5 text-red-600" />
              Academic Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-red-50/50 rounded-lg border border-red-100">
                <span className="text-sm font-medium text-gray-900">Working Days</span>
                <Badge variant="secondary" className="bg-red-100 text-red-800 border-red-200">Monday - Saturday</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-orange-50/50 rounded-lg border border-orange-100">
                <span className="text-sm font-medium text-gray-900">Class Duration</span>
                <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-200">60 minutes</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50/50 rounded-lg border border-yellow-100">
                <span className="text-sm font-medium text-gray-900">Break Duration</span>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-200">15 minutes</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50/50 rounded-lg border border-purple-100">
                <span className="text-sm font-medium text-gray-900">Lunch Break</span>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-200">1:15 PM - 2:15 PM</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/90 backdrop-blur-sm border-red-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900">
              <Settings className="h-5 w-5 text-orange-600" />
              Notification Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50/50 rounded-lg border border-green-100">
                <span className="text-sm font-medium text-gray-900">Email Notifications</span>
                <Badge className="bg-green-100 text-green-800 border-green-200">Enabled</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50/50 rounded-lg border border-green-100">
                <span className="text-sm font-medium text-gray-900">Schedule Conflicts Alert</span>
                <Badge className="bg-green-100 text-green-800 border-green-200">Enabled</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50/50 rounded-lg border border-green-100">
                <span className="text-sm font-medium text-gray-900">Approval Reminders</span>
                <Badge className="bg-green-100 text-green-800 border-green-200">Enabled</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50/50 rounded-lg border border-gray-100">
                <span className="text-sm font-medium text-gray-900">Weekly Reports</span>
                <Badge className="bg-gray-100 text-gray-800 border-gray-200">Disabled</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}