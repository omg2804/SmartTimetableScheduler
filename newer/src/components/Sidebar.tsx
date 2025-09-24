import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "./ui/utils";
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  Building, 
  CheckSquare, 
  Settings,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Bell
} from "lucide-react";
import { UserRole } from "./LoginPage";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userRole?: UserRole;
}

const getNavigationForRole = (userRole?: UserRole) => {
  const baseNavigation = [
    { name: "Dashboard", id: "dashboard", icon: LayoutDashboard, roles: ["admin", "principal", "teacher", "student"] },
  ];

  const fullNavigation = [
    { name: "Dashboard", id: "dashboard", icon: LayoutDashboard, roles: ["admin", "principal", "teacher", "student"] },
    { name: "Timetable", id: "timetable", icon: Calendar, roles: ["admin", "principal", "teacher", "student"] },
    { name: "Faculty Availability", id: "faculty", icon: Users, roles: ["admin", "principal"] },
    { name: "Classrooms & Labs", id: "rooms", icon: Building, roles: ["admin", "principal"] },
    { name: "Approvals", id: "approvals", icon: CheckSquare, roles: ["admin", "principal"] },
    { name: "Settings", id: "settings", icon: Settings, roles: ["admin", "principal"] },
  ];

  const teacherNavigation = [
    { name: "Dashboard", id: "dashboard", icon: LayoutDashboard, roles: ["teacher"] },
    { name: "My Timetable", id: "timetable", icon: Calendar, roles: ["teacher"] },
    { name: "Notifications", id: "notifications", icon: Bell, roles: ["teacher"] },
    { name: "Settings", id: "settings", icon: Settings, roles: ["teacher"] },
  ];

  const studentNavigation = [
    { name: "Dashboard", id: "dashboard", icon: LayoutDashboard, roles: ["student"] },
    { name: "My Timetable", id: "timetable", icon: Calendar, roles: ["student"] },
    { name: "Assignments", id: "assignments", icon: BookOpen, roles: ["student"] },
    { name: "Notifications", id: "notifications", icon: Bell, roles: ["student"] },
  ];

  if (!userRole) return fullNavigation;

  switch (userRole) {
    case "admin":
    case "principal":
      return fullNavigation.filter(item => item.roles.includes(userRole));
    case "teacher":
      return teacherNavigation;
    case "student":
      return studentNavigation;
    default:
      return baseNavigation;
  }
};

export function Sidebar({ activeTab, setActiveTab, userRole }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const navigation = getNavigationForRole(userRole);

  return (
    <div className={cn(
      "bg-gradient-to-b from-black via-gray-900 to-black border-r border-red-500/20 flex flex-col transition-all duration-300 shadow-lg",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className="p-4 border-b border-red-500/20">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="w-full justify-end text-gray-400 hover:text-white hover:bg-red-500/10"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant="ghost"
              className={cn(
                "w-full justify-start gap-3 text-left text-gray-300 hover:text-white hover:bg-red-500/10 transition-all duration-200",
                collapsed && "px-2 justify-center",
                activeTab === item.id && "bg-gradient-to-r from-red-500/20 to-orange-500/20 text-white border border-red-500/30"
              )}
              onClick={() => setActiveTab(item.id)}
            >
              <Icon className="h-4 w-4 flex-shrink-0" />
              {!collapsed && <span>{item.name}</span>}
            </Button>
          );
        })}
      </nav>
    </div>
  );
}