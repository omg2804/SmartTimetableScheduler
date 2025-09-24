import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import { 
  Brain, 
  User, 
  Lock, 
  ArrowLeft, 
  AlertCircle,
  UserCheck,
  GraduationCap,
  Shield,
  BookOpen
} from "lucide-react";

export type UserRole = "admin" | "teacher" | "principal" | "student";

interface LoginPageProps {
  onBack: () => void;
  onLogin: (userRole: UserRole, username: string) => void;
}

interface UserTypeOption {
  value: UserRole;
  label: string;
  description: string;
  icon: typeof User;
  color: string;
}

export function LoginPage({ onBack, onLogin }: LoginPageProps) {
  const [userType, setUserType] = useState<UserRole | "">("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const userTypes: UserTypeOption[] = [
    {
      value: "admin",
      label: "Administrator",
      description: "Full system access and management",
      icon: Shield,
      color: "bg-red-100 text-red-700"
    },
    {
      value: "principal",
      label: "Principal",
      description: "Oversight and approval authority",
      icon: UserCheck,
      color: "bg-purple-100 text-purple-700"
    },
    {
      value: "teacher",
      label: "Teacher",
      description: "View schedules and submit requests",
      icon: GraduationCap,
      color: "bg-blue-100 text-blue-700"
    },
    {
      value: "student",
      label: "Student",
      description: "View personal timetable",
      icon: BookOpen,
      color: "bg-green-100 text-green-700"
    }
  ];

  // Mock credentials for demo purposes
  const mockCredentials = {
    admin: { username: "admin", password: "admin123" },
    principal: { username: "principal", password: "principal123" },
    teacher: { username: "teacher", password: "teacher123" },
    student: { username: "student", password: "student123" }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (!userType) {
      setError("Please select a user type");
      setIsLoading(false);
      return;
    }

    if (!username || !password) {
      setError("Please enter both username and password");
      setIsLoading(false);
      return;
    }

    // Check mock credentials
    const credentials = mockCredentials[userType as UserRole];
    if (username === credentials.username && password === credentials.password) {
      onLogin(userType as UserRole, username);
    } else {
      setError("Invalid username or password");
    }

    setIsLoading(false);
  };

  const selectedUserType = userTypes.find(type => type.value === userType);

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-20 left-10 w-32 h-32 bg-red-500/20 rounded-full blur-xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-20 right-10 w-48 h-48 bg-orange-500/20 rounded-full blur-xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-1/3 right-1/3 w-24 h-24 bg-red-600/20 rounded-full blur-xl"
        />
      </div>

      <div className="relative min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Back Button */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute top-0 left-0 z-10"
              >
                <Button
                  variant="ghost"
                  onClick={onBack}
                  className="text-white hover:bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </motion.div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mt-16 bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-white/10 p-8 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Brain className="h-24 w-24 mx-auto mb-6 text-orange-400" />
                    <h3 className="text-2xl font-semibold mb-4">AI Timetable Manager</h3>
                    <p className="text-gray-300">Intelligent scheduling for modern institutions</p>
                  </div>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-white">AI-Powered</div>
                      <div className="text-sm text-gray-300">Smart scheduling</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Login Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-md mx-auto lg:mx-0"
          >
            {/* Mobile Back Button */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:hidden mb-6"
            >
              <Button
                variant="ghost"
                onClick={onBack}
                className="text-white hover:bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </motion.div>

            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-8"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <h1 className="text-xl font-medium text-white">AI Timetable Manager</h1>
                  <p className="text-sm text-gray-300">Sign in to your account</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white">Welcome Back</CardTitle>
                  <CardDescription className="text-gray-300">
                    Select your role and enter your credentials to continue
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* User Type Selection */}
                    <div className="space-y-3">
                      <label htmlFor="userType" className="text-white font-medium">User Type</label>
                      <div className="grid grid-cols-2 gap-2">
                        {userTypes.map((type) => {
                          const Icon = type.icon;
                          return (
                            <button
                              key={type.value}
                              type="button"
                              onClick={() => setUserType(type.value)}
                              className={`p-3 rounded-lg border transition-all duration-200 ${
                                userType === type.value 
                                  ? 'border-orange-400 bg-orange-400/20' 
                                  : 'border-white/20 hover:border-white/40 bg-white/5'
                              }`}
                            >
                              <Icon className="h-5 w-5 text-white mx-auto mb-2" />
                              <div className="text-xs text-white font-medium">{type.label}</div>
                            </button>
                          );
                        })}
                      </div>
                      
                      {/* Show selected user type info */}
                      {selectedUserType && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className="p-3 rounded-lg bg-orange-500/20 border border-orange-400/30"
                        >
                          <div className="flex items-center gap-3">
                            <selectedUserType.icon className="h-5 w-5 text-orange-300" />
                            <div>
                              <div className="font-medium text-white">{selectedUserType.label}</div>
                              <div className="text-sm text-gray-300">{selectedUserType.description}</div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Username */}
                    <div className="space-y-2">
                      <label htmlFor="username" className="text-white font-medium">Username</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          id="username"
                          type="text"
                          placeholder="Enter your username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                          required
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                      <label htmlFor="password" className="text-white font-medium">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          id="password"
                          type="password"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                          required
                        />
                      </div>
                    </div>

                    {/* Error Message */}
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-red-500/20 border border-red-500/30 text-red-300 p-3 rounded-lg flex items-center gap-2"
                      >
                        <AlertCircle className="h-4 w-4" />
                        <span className="text-sm">{error}</span>
                      </motion.div>
                    )}

                    {/* Demo Credentials Info */}
                    <div className="bg-white/5 rounded-lg p-4 space-y-2 border border-white/10">
                      <h4 className="font-medium text-sm text-white">Demo Credentials:</h4>
                      <div className="grid grid-cols-1 gap-1 text-xs text-gray-300">
                        <div>Admin: admin / admin123</div>
                        <div>Principal: principal / principal123</div>
                        <div>Teacher: teacher / teacher123</div>
                        <div>Student: student / student123</div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white border-0"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Signing in...
                          </>
                        ) : (
                          <>
                            <User className="mr-2 h-4 w-4" />
                            Sign In
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Additional Info */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mt-6 text-sm text-gray-300"
            >
              <p>Secure login with role-based access control</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}