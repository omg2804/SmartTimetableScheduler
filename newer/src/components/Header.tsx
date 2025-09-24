import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "./ui/dropdown-menu";
import { Badge } from "./ui/badge";
import { User, LogOut, Settings, Shield, GraduationCap, UserCheck, BookOpen, Brain } from "lucide-react";
import { UserRole } from "./LoginPage";

interface HeaderProps {
  user?: {
    role: UserRole;
    username: string;
  };
  onLogout?: () => void;
}

const roleConfig = {
  admin: { label: "Administrator", icon: Shield, color: "bg-red-100 text-red-700" },
  principal: { label: "Principal", icon: UserCheck, color: "bg-purple-100 text-purple-700" },
  teacher: { label: "Teacher", icon: GraduationCap, color: "bg-blue-100 text-blue-700" },
  student: { label: "Student", icon: BookOpen, color: "bg-green-100 text-green-700" }
};

export function Header({ user, onLogout }: HeaderProps) {
  const currentRole = user ? roleConfig[user.role] : null;
  const RoleIcon = currentRole?.icon || User;

  return (
    <header className="h-16 bg-gradient-to-r from-black via-gray-900 to-black border-b border-red-500/20 px-6 flex items-center justify-between sticky top-0 z-40 shadow-lg">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
          <Brain className="h-4 w-4 text-white" />
        </div>
        <div>
          <h1 className="text-lg font-medium text-white">AI-Powered Timetable Manager</h1>
          <p className="text-sm text-gray-300">Academic Institute</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {user && (
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium text-white capitalize">{user.username}</p>
              <div className="flex items-center gap-1">
                <Badge variant="secondary" className={`text-xs ${currentRole?.color} bg-white/10 border-red-500/30`}>
                  <RoleIcon className="h-3 w-3 mr-1" />
                  {currentRole?.label}
                </Badge>
              </div>
            </div>
          </div>
        )}
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full hover:bg-white/10">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                <AvatarFallback className="bg-gradient-to-br from-red-500 to-orange-600 text-white">
                  {user ? user.username.substring(0, 2).toUpperCase() : "AD"}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-gray-900 border-red-500/20" align="end" forceMount>
            {user && (
              <>
                <div className="px-2 py-2">
                  <p className="text-sm font-medium text-white">{user.username}</p>
                  <p className="text-xs text-gray-400">{currentRole?.label}</p>
                </div>
                <DropdownMenuSeparator className="bg-red-500/20" />
              </>
            )}
            <DropdownMenuItem className="text-white hover:bg-red-500/20">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-white hover:bg-red-500/20">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            {user && onLogout && (
              <>
                <DropdownMenuSeparator className="bg-red-500/20" />
                <DropdownMenuItem onClick={onLogout} className="text-white hover:bg-red-500/20">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}