import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { 
  Building2, 
  Users, 
  BookOpen, 
  Clock,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Calendar
} from "lucide-react";

export function Dashboard() {
  const stats = [
    {
      title: "Classrooms Utilized",
      value: "84%",
      progress: 84,
      icon: Building2,
      description: "42 of 50 rooms scheduled",
      trend: "+5% from last week"
    },
    {
      title: "Faculty Workload Balance",
      value: "92%",
      progress: 92,
      icon: Users,
      description: "Well-distributed teaching load",
      trend: "+2% improvement"
    },
    {
      title: "Total Scheduled Classes",
      value: "248",
      icon: BookOpen,
      description: "Classes this week",
      trend: "6 pending approvals"
    },
    {
      title: "Pending Approvals",
      value: "3",
      icon: Clock,
      description: "Timetable changes awaiting review",
      trend: "2 urgent"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      action: "Timetable generated for CSE Batch A",
      time: "2 hours ago",
      status: "completed",
      user: "Dr. Sarah Johnson"
    },
    {
      id: 2,
      action: "Room conflict resolved in Lab 101",
      time: "4 hours ago",
      status: "completed",
      user: "Prof. Michael Chen"
    },
    {
      id: 3,
      action: "Faculty availability updated",
      time: "6 hours ago",
      status: "pending",
      user: "Dr. Emily Rodriguez"
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-medium text-gray-900">Dashboard</h1>
          <p className="text-gray-500 mt-1">Overview of your timetable management system</p>
        </div>
        <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
          <BookOpen className="mr-2 h-4 w-4" />
          Generate Timetable
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
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
                <p className="text-xs text-gray-500 mb-2">
                  {stat.description}
                </p>
                {stat.progress && (
                  <Progress value={stat.progress} className="h-2 mb-2" />
                )}
                <p className="text-xs text-green-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {stat.trend}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white border-[#e0e0e0] shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Recent Activity</CardTitle>
            <CardDescription>Latest timetable management actions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  {activity.status === 'completed' ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-yellow-500" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">by {activity.user}</p>
                </div>
                <div className="flex-shrink-0">
                  <Badge variant={activity.status === 'completed' ? 'secondary' : 'outline'}>
                    {activity.time}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-white border-[#e0e0e0] shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
            <Button variant="outline" size="sm" className="h-20 flex-col gap-2">
              <Calendar className="h-5 w-5" />
              <span className="text-xs">View Timetable</span>
            </Button>
            <Button variant="outline" size="sm" className="h-20 flex-col gap-2">
              <Users className="h-5 w-5" />
              <span className="text-xs">Faculty Schedule</span>
            </Button>
            <Button variant="outline" size="sm" className="h-20 flex-col gap-2">
              <Building2 className="h-5 w-5" />
              <span className="text-xs">Room Booking</span>
            </Button>
            <Button variant="outline" size="sm" className="h-20 flex-col gap-2">
              <CheckCircle className="h-5 w-5" />
              <span className="text-xs">Approvals</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}