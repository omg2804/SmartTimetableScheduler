import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import aiDashboardImage from '../assets/img/ailand.jpg';
import { 
  Brain, 
  Calendar, 
  Users, 
  Building2, 
  CheckCircle, 
  Clock, 
  TrendingUp,
  BookOpen,
  Star,
  ArrowRight,
  Zap,
  Shield,
  BarChart3,
  Sparkles,
  Play
} from "lucide-react";

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Scheduling",
      description: "Intelligent algorithms automatically generate optimal timetables, reducing conflicts and maximizing resource utilization."
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Instant notifications and updates ensure everyone stays informed about schedule changes and important announcements."
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Comprehensive dashboard with analytics to track resource utilization, faculty workload, and scheduling efficiency."
    },
    {
      icon: Users,
      title: "Multi-role Access",
      description: "Tailored interfaces for administrators, teachers, principals, and students with appropriate permissions and features."
    },
    {
      icon: Shield,
      title: "Conflict Resolution",
      description: "Automatic detection and resolution of scheduling conflicts with intelligent suggestions for optimal alternatives."
    },
    {
      icon: Zap,
      title: "Quick Approvals",
      description: "Streamlined approval workflow for schedule changes with comment system and status tracking."
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Head of Computer Science",
      content: "This system has revolutionized how we manage our department schedules. The AI suggestions are incredibly accurate.",
      rating: 5
    },
    {
      name: "Prof. Michael Chen",
      role: "Vice Principal",
      content: "The approval workflow and conflict detection have saved us countless hours. Highly recommended for any institution.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Administrative Officer",
      content: "User-friendly interface and powerful features. The multi-role access makes it perfect for our diverse team.",
      rating: 5
    }
  ];

  const stats = [
    { value: "10,000+", label: "Students Managed" },
    { value: "500+", label: "Faculty Members" },
    { value: "95%", label: "Conflict Reduction" },
    { value: "24/7", label: "System Availability" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen"
    >
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-0 left-0 right-0 z-50 bg-transparent"
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-medium text-white">AI Timetable Manager</h1>
              <p className="text-sm text-gray-300">Smart Scheduling Solution</p>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={onGetStarted}
              variant="outline" 
              className="border-white/30 text-black
               hover:bg-white/10 backdrop-blur-sm"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </motion.header>

      {/* Hero Section - Black Upper Half */}
      <section className="relative min-h-screen bg-black overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Large floating gradient orbs */}
          <motion.div
            initial={{ opacity: 0, scale: 0, x: -100 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              x: 0,
              y: [0, -30, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              opacity: { duration: 1.5, delay: 0.5 },
              scale: { duration: 1.5, delay: 0.5 },
              x: { duration: 1.5, delay: 0.5 },
              y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 },
              rotate: { duration: 20, repeat: Infinity, ease: "linear", delay: 2 }
            }}
            className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-red-500/30 to-orange-600/30 rounded-full blur-2xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0, x: 100 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              x: 0,
              y: [0, 40, 0],
              rotate: [360, 180, 0]
            }}
            transition={{ 
              opacity: { duration: 1.5, delay: 0.8 },
              scale: { duration: 1.5, delay: 0.8 },
              x: { duration: 1.5, delay: 0.8 },
              y: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2.5 },
              rotate: { duration: 25, repeat: Infinity, ease: "linear", delay: 2.5 }
            }}
            className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-r from-orange-500/25 to-red-600/25 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              x: [0, 50, 0],
              rotate: [0, -180, -360]
            }}
            transition={{ 
              opacity: { duration: 1.5, delay: 1.1 },
              scale: { duration: 1.5, delay: 1.1 },
              y: { duration: 1.5, delay: 1.1 },
              x: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 },
              rotate: { duration: 30, repeat: Infinity, ease: "linear", delay: 3 }
            }}
            className="absolute bottom-40 left-1/3 w-32 h-32 bg-gradient-to-r from-red-600/20 to-orange-500/20 rounded-full blur-xl"
          />
          
          {/* Additional sparkle effects */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 2,
              ease: "easeInOut"
            }}
            className="absolute top-1/3 left-1/2 w-4 h-4 bg-white rounded-full"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: 3.5,
              ease: "easeInOut"
            }}
            className="absolute top-2/3 right-1/4 w-3 h-3 bg-orange-300 rounded-full"
          />
        </div>

        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <Badge className="bg-red-500/20 text-red-300 border-red-500/30 mb-6 px-4 py-2">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="h-4 w-4 mr-2" />
                  </motion.div>
                  AI-Powered Solution
                </Badge>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="text-4xl lg:text-5xl font-medium text-white leading-tight"
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  Smart Timetable Management for{" "}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="bg-gradient-to-r from-red-400 via-orange-400 to-red-600 bg-clip-text text-transparent inline-block"
                >
                  Modern Institutions
                </motion.span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-xl text-gray-300 leading-relaxed max-w-lg"
              >
                Revolutionize your academic scheduling with AI-driven automation, 
                conflict resolution, and intelligent resource optimization.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    onClick={onGetStarted}
                    className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white border-0 px-8 py-4 text-lg shadow-xl"
                  >
                    Start Free Trial
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </motion.div>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Watch Demo
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-medium text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - AI Dashboard Interface */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative">
                {/* Main AI Dashboard Interface */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="relative z-10"
                >
                  <img
                    src={aiDashboardImage}
                    alt="AI Timetable Assistant Dashboard"
                    className="w-full max-w-lg h-auto rounded-xl shadow-2xl"
                  />
                </motion.div>

                {/* Floating Demo Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20, rotate: -5 }}
                  animate={{ opacity: 1, y: 0, rotate: -5 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="absolute -top-8 -left-8 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                >
                  <div className="flex items-center gap-3 text-white">
                    <Calendar className="h-5 w-5 text-red-400" />
                    <div className="text-sm">
                      <div className="font-medium">Schedule Generated</div>
                      <div className="text-gray-300 text-xs">CS Dept - Fall 2024</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20, rotate: 5 }}
                  animate={{ opacity: 1, y: 0, rotate: 5 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                  className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                >
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <div className="text-sm">
                      <div className="font-medium">0 Conflicts</div>
                      <div className="text-gray-300 text-xs">Optimized Schedule</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Curved Transition to Navy/Teal Gradient */}
        <div className="absolute bottom-0 w-full">
          <svg
            className="w-full h-32 md:h-40"
            viewBox="0 0 1200 200"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="navyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#1e3a8a', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#0f766e', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#164e63', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path
              d="M0,100 C300,150 600,50 1200,100 L1200,200 L0,200 Z"
              fill="url(#navyGradient)"
            />
          </svg>
        </div>
      </section>

      {/* Lower Section - Navy/Teal Professional Theme */}
      <div className="bg-gradient-to-br from-blue-900 via-cyan-800 to-slate-800 relative">
        {/* Features Section */}
        <section className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <Badge className="bg-teal-500/20 text-teal-200 border-teal-400/30 mb-6 px-4 py-2">
                <Star className="h-4 w-4 mr-2" />
                Features
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
                Everything you need for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
                  perfect scheduling
                </span>
              </h2>
              <p className="text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
                Our comprehensive suite of tools ensures your institution runs smoothly 
                with intelligent automation and user-friendly interfaces.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const cardColors = [
                  "from-blue-600/90 to-blue-700/90 border-blue-400/30",
                  "from-teal-600/90 to-teal-700/90 border-teal-400/30", 
                  "from-cyan-600/90 to-cyan-700/90 border-cyan-400/30",
                  "from-slate-600/90 to-slate-700/90 border-slate-400/30",
                  "from-indigo-600/90 to-indigo-700/90 border-indigo-400/30",
                  "from-blue-800/90 to-blue-900/90 border-blue-400/30"
                ];
                const iconColors = [
                  "text-blue-200", "text-teal-200", "text-cyan-200", 
                  "text-slate-200", "text-indigo-200", "text-blue-200"
                ];
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8, scale: 1.03 }}
                  >
                    <Card className={`bg-gradient-to-br ${cardColors[index]} backdrop-blur-sm border shadow-xl hover:shadow-2xl transition-all duration-300 h-full`}>
                      <CardHeader className="pb-4">
                        <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                          <Icon className={`h-7 w-7 ${iconColors[index]}`} />
                        </div>
                        <CardTitle className="text-xl font-semibold text-white leading-tight">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-slate-100 text-base leading-relaxed">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Visual Section */}
        <section className="py-24 bg-white/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjBtb2Rlcm4lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NjgxNzUxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Modern classroom with technology"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute -top-8 -right-8 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl shadow-xl p-6 text-white"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <Calendar className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg text-white">248 Classes</div>
                      <div className="text-sm text-teal-100">This week</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <Badge className="bg-teal-100 text-teal-800 border-teal-200 mb-6 px-4 py-2">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Efficiency
                  </Badge>
                  <h2 className="text-4xl font-semibold text-slate-900 mb-6 leading-tight">
                    Maximize your{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                      institution's potential
                    </span>
                  </h2>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    Our AI-powered system analyzes patterns, predicts conflicts, and optimizes 
                    resource allocation to ensure your institution operates at peak efficiency.
                  </p>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      icon: CheckCircle,
                      title: "Automated Conflict Detection",
                      description: "Instantly identifies and resolves scheduling conflicts before they impact your operations.",
                      color: "from-emerald-500 to-teal-600",
                      iconBg: "bg-emerald-100",
                      iconColor: "text-emerald-600"
                    },
                    {
                      icon: Building2,
                      title: "Resource Optimization", 
                      description: "Maximizes classroom and faculty utilization while maintaining optimal learning environments.",
                      color: "from-blue-500 to-cyan-600",
                      iconBg: "bg-blue-100",
                      iconColor: "text-blue-600"
                    },
                    {
                      icon: BookOpen,
                      title: "Smart Recommendations",
                      description: "AI-powered suggestions help you make informed decisions about schedule improvements.",
                      color: "from-indigo-500 to-purple-600",
                      iconBg: "bg-indigo-100", 
                      iconColor: "text-indigo-600"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-6 p-4 rounded-xl hover:bg-slate-50 transition-all duration-300"
                    >
                      <div className={`w-12 h-12 ${item.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-gradient-to-r from-slate-100 to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <Badge className="bg-cyan-500/20 text-cyan-700 border-cyan-300 mb-6 px-4 py-2">
                <Star className="h-4 w-4 mr-2" />
                Testimonials
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6 leading-tight">
                Trusted by{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  educators worldwide
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                See what academic leaders say about our timetable management system.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => {
                const cardGradients = [
                  "from-blue-600 to-blue-700",
                  "from-teal-600 to-cyan-700", 
                  "from-slate-600 to-slate-700"
                ];
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <Card className={`bg-gradient-to-br ${cardGradients[index]} border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full text-white`}>
                      <CardContent className="p-8">
                        <div className="flex items-center gap-1 mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-300 text-yellow-300" />
                          ))}
                        </div>
                        <blockquote className="text-lg text-white/95 mb-6 italic leading-relaxed">
                          "{testimonial.content}"
                        </blockquote>
                        <div className="border-t border-white/20 pt-4">
                          <p className="font-semibold text-lg text-white">{testimonial.name}</p>
                          <p className="text-white/80">{testimonial.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-blue-900 via-teal-800 to-cyan-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 left-0 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.1, 0.25, 0.1]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3
              }}
              className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl lg:text-5xl font-semibold mb-6 text-white leading-tight">
                Ready to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
                  transform your scheduling?
                </span>
              </h2>
              <p className="text-xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed">
                Join thousands of institutions already using AI-powered timetable management. 
                Start your free trial today and see the difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    onClick={onGetStarted}
                    className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white border-0 px-8 py-4 text-lg font-semibold shadow-xl"
                  >
                    Get Started Now
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold"
                  >
                    Schedule Demo
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-lg text-white">AI Timetable Manager</p>
                <p className="text-slate-400">Smart Scheduling Solution</p>
              </div>
            </div>
            <p className="text-slate-400">
              © 2024 AI Timetable Manager. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}