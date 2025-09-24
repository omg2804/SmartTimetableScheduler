import { motion } from "framer-motion";
import { Brain, Sparkles, Calendar, Users } from "lucide-react";

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center overflow-hidden z-50">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating gradient orbs */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.4,
            scale: 1,
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            opacity: { duration: 1 },
            scale: { duration: 1 },
            x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-red-500/40 to-orange-600/40 rounded-full blur-xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.3,
            scale: 1,
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            opacity: { duration: 1.2, delay: 0.2 },
            scale: { duration: 1.2, delay: 0.2 },
            x: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
          }}
          className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-r from-orange-500/30 to-red-600/30 rounded-full blur-lg"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.5,
            scale: 1,
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            opacity: { duration: 1.4, delay: 0.4 },
            scale: { duration: 1.4, delay: 0.4 },
            x: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
          }}
          className="absolute bottom-1/3 left-1/2 w-20 h-20 bg-gradient-to-r from-red-400/35 to-orange-500/35 rounded-full blur-md"
        />
      </div>

      {/* Main content */}
      <div className="relative flex flex-col items-center space-y-8">
        {/* Logo with pulsing effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-orange-600/30 rounded-2xl blur-xl"
          />
          <div className="relative w-24 h-24 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Brain className="h-12 w-12 text-white" />
            </motion.div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <h1 className="text-4xl font-medium text-white mb-2">
            AI Timetable Manager
          </h1>
          <p className="text-lg text-gray-300">
            Smart Scheduling Solution
          </p>
        </motion.div>

        {/* Feature icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center space-x-8"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center text-center"
          >
            <Sparkles className="h-8 w-8 text-orange-400 mb-2" />
            <span className="text-xs text-gray-400">AI Powered</span>
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
            className="flex flex-col items-center text-center"
          >
            <Calendar className="h-8 w-8 text-red-400 mb-2" />
            <span className="text-xs text-gray-400">Smart Scheduling</span>
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6
            }}
            className="flex flex-col items-center text-center"
          >
            <Users className="h-8 w-8 text-orange-400 mb-2" />
            <span className="text-xs text-gray-400">Multi-Role Access</span>
          </motion.div>
        </motion.div>

        {/* Loading progress */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ duration: 3.5, ease: "easeInOut", delay: 0.5 }}
          className="w-48 h-1 bg-gray-700 rounded-full overflow-hidden"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="h-full bg-gradient-to-r from-red-500 to-orange-600 rounded-full"
          />
        </motion.div>

        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-sm text-gray-400"
          >
            Initializing your workspace...
          </motion.p>
        </motion.div>
      </div>

      {/* Sparkle effects */}
      <motion.div
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1.2, 0.5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-1/4 right-1/4 w-2 h-2 bg-white rounded-full"
      />
      <motion.div
        animate={{
          opacity: [0, 1, 0],
          scale: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-orange-300 rounded-full"
      />
      <motion.div
        animate={{
          opacity: [0, 1, 0],
          scale: [0.4, 1.1, 0.4],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
        className="absolute top-3/4 right-1/3 w-1 h-1 bg-red-300 rounded-full"
      />
    </div>
  );
}