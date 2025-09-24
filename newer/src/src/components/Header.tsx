import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Brain, LogOut, User, UserCheck, GraduationCap, Shield, BookOpen } from "lucide-react";
import { UserRole } from "./LoginPage";

interface User {
  role: UserRole;
  username: string;
}

interface HeaderProps {
  user: User;
  onLogout: () => void;
}

export function Header({ user, onLogout }: HeaderProps) {
  const getRoleIcon = (role: UserRole) => {
    switch (role) {
      case "admin":
        return Shield;
      case "principal":
        return UserCheck;
      case "teacher":
        return GraduationCap;
      case "student":
        return BookOpen;
      default:
        return User;
    }
  };

  const getRoleColor = (role: UserRole) => {
    switch (role) {
      case "admin":
        return "bg-red-100 text-red-800 border-red-200";
      case "principal":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "teacher":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "student":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getRoleName = (role: UserRole) => {
    switch (role) {
      case "admin":
        return "Administrator";
      case "principal":
        return "Principal";
      case "teacher":
        return "Teacher";
      case "student":
        return "Student";
      default:
        return "User";
    }
  };

  const Icon = getRoleIcon(user.role);

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-red-200/50 shadow-sm">
      <div className="max-w-full mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-medium text-gray-900">AI Timetable Manager</h1>
              <p className="text-sm text-gray-600">Smart Scheduling Solution</p>
            </div>
          </div>

          {/* User Info and Logout */}
          <div className="flex items-center gap-4">
            {/* User Role Badge */}
            <Badge className={getRoleColor(user.role)}>
              <Icon className="h-4 w-4 mr-2" />
              {getRoleName(user.role)}
            </Badge>

            {/* User Name */}
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900 capitalize">{user.username}</p>
              <p className="text-xs text-gray-600">Logged in</p>
            </div>

            {/* Logout Button */}
            <Button
              variant="outline"
              onClick={onLogout}
              className="border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}