import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";
import { motion, AnimatePresence } from "motion/react";
import { 
  MessageCircle, 
  X, 
  Send, 
  Mic, 
  Clock,
  Users,
  Calendar,
  AlertTriangle,
  Sparkles,
  ArrowRight
} from "lucide-react";

interface Message {
  id: string;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "assistant",
      content: "Hello! I'm your AI timetable assistant. I can help you with faculty availability, room bookings, schedule conflicts, and optimization suggestions. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const quickSuggestions = [
    "Which faculty is free on Wednesday 10-11 AM?",
    "Show me workload distribution for CSE faculty",
    "Suggest timetable adjustments for lab clashes",
    "Find available rooms for Thursday afternoon",
    "Check for schedule conflicts this week"
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: getAIResponse(inputValue),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);

    setInputValue("");
  };

  const getAIResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes("free") || lowerQuery.includes("available")) {
      return "Based on the current schedule, Dr. Emily Rodriguez and Prof. David Lee are available on Wednesday from 10-11 AM. Dr. Sarah Johnson has a class conflict during that time slot.";
    }
    
    if (lowerQuery.includes("workload") || lowerQuery.includes("distribution")) {
      return "Current CSE faculty workload distribution: Dr. Sarah Johnson (18 hours/week), Prof. Michael Chen (16 hours/week), Dr. Emily Rodriguez (15 hours/week), Prof. David Lee (17 hours/week). The distribution is well-balanced within optimal range.";
    }
    
    if (lowerQuery.includes("clash") || lowerQuery.includes("conflict")) {
      return "I found 2 potential conflicts: Lab 201 is double-booked on Thursday 2-4 PM, and Dr. Sarah Johnson has overlapping classes on Friday 11-12 PM. I suggest moving the Database Lab to Lab 202 or rescheduling to Friday 3-5 PM.";
    }
    
    if (lowerQuery.includes("room")) {
      return "Available rooms for Thursday afternoon: Room 105, Room 107, Lab 203, and Seminar Hall B. Room 105 has projector and AC, while Lab 203 has 30 computers available.";
    }
    
    return "I understand you're asking about timetable management. Could you be more specific about what you'd like to know? I can help with faculty schedules, room availability, conflict resolution, and optimization suggestions.";
  };

  const handleQuickSuggestion = (suggestion: string) => {
    setInputValue(suggestion);
  };

  if (!isOpen) {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-[9999]"
          style={{ pointerEvents: 'auto' }}
        >
          <div className="relative">
            {/* Pulsing ring effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/30 to-orange-600/30"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.8, 0, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <Button
              onClick={() => {
                console.log("AI Assistant button clicked!");
                setIsOpen(true);
              }}
              className="relative h-16 w-16 rounded-full bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 shadow-2xl border-2 border-white/20 z-10"
              size="icon"
              style={{ pointerEvents: 'auto' }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="h-7 w-7 text-white" />
              </motion.div>
            </Button>
            
            {/* Notification dot */}
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white shadow-lg flex items-center justify-center z-20"
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </motion.div>
          </div>
        </motion.div>

      {/* Welcome tooltip */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 0, x: 20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-24 right-6 z-40 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-4 max-w-xs border border-orange-200"
          >
            <p className="text-sm text-gray-800 mb-2">
              👋 Hi! I'm your AI assistant. Click me for help with timetables!
            </p>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setShowWelcome(false)}
              className="text-xs text-gray-500 hover:text-gray-700 p-1 h-auto"
            >
              Got it
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      </>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.6
      }}
      className="fixed bottom-6 right-6 w-96 h-[600px] z-[9999]"
    >
      {/* Dark background with gradient */}
      <div className="absolute inset-0 bg-gray-950/98 backdrop-blur-xl rounded-2xl border border-orange-500/15 shadow-2xl">
        {/* Subtle glowing border effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/10 via-orange-500/15 to-red-500/10 blur-lg"></div>
        
        <Card className="relative w-full h-full bg-transparent border-0 flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b border-gray-800/60">
            <CardTitle className="text-lg flex items-center gap-3 text-white">
              <motion.div 
                className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg"
                animate={{ 
                  boxShadow: [
                    "0 0 0 0 rgba(255, 87, 34, 0.3)",
                    "0 0 0 8px rgba(255, 87, 34, 0)",
                    "0 0 0 0 rgba(255, 87, 34, 0)"
                  ]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="h-5 w-5 text-white" />
              </motion.div>
              <div>
                <p className="font-semibold text-white">AI Assistant</p>
                <p className="text-xs text-orange-300/90">Smart Timetable Helper</p>
              </div>
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0 bg-gray-950/40">
            {/* Messages */}
            <ScrollArea className="flex-1 p-5">
              <div className="space-y-4">
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-xl p-4 ${
                          message.type === "user"
                            ? "bg-gradient-to-r from-red-500 to-orange-600 text-white shadow-lg"
                            : "bg-gray-800/60 backdrop-blur-sm text-gray-100 border border-gray-700/50"
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.content}</p>
                        <p className={`text-xs mt-2 ${
                          message.type === "user" ? "text-white/70" : "text-gray-400"
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {/* Typing indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                      <div className="flex items-center gap-1">
                        <motion.div
                          className="w-2 h-2 bg-orange-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-orange-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-orange-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </ScrollArea>

            {/* Quick Suggestions */}
            {messages.length === 1 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-5 border-t border-gray-800/60 bg-gray-900/40 backdrop-blur-sm"
              >
                <p className="text-sm text-gray-300 mb-4 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-orange-400" />
                  Quick suggestions:
                </p>
                <div className="space-y-3">
                  {quickSuggestions.slice(0, 3).map((suggestion, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full text-left justify-start text-xs h-auto py-3 px-4 bg-gray-800/40 border-gray-700/50 text-gray-300 hover:bg-gray-700/60 hover:text-white hover:border-orange-400/60 transition-all duration-200"
                        onClick={() => handleQuickSuggestion(suggestion)}
                      >
                        {suggestion}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Input Area - Perfectly matching the reference image */}
            <div className="p-6">
              <div className="relative flex items-center justify-center">
                {/* Triple-layer glow effects exactly like the reference */}
                
                {/* Outermost glow - Large, soft orange/red gradient */}
                <div className="absolute -inset-8 bg-gradient-to-r from-orange-600/20 via-red-500/30 via-orange-500/25 to-red-600/20 rounded-full blur-3xl opacity-90"></div>
                
                {/* Middle glow - Medium intensity */}
                <div className="absolute -inset-6 bg-gradient-to-r from-orange-500/30 via-red-500/40 to-orange-500/30 rounded-full blur-2xl opacity-95"></div>
                
                {/* Inner glow - Tight, bright orange */}
                <div className="absolute -inset-3 bg-gradient-to-r from-orange-400/50 via-red-400/60 to-orange-400/50 rounded-full blur-xl opacity-100"></div>
                
                {/* Immediate border glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-300/40 to-red-300/40 rounded-full blur-sm opacity-80"></div>
                
                {/* Main input container with exact styling from reference */}
                <div className="relative flex items-center w-full max-w-lg bg-gray-950/98 backdrop-blur-md rounded-full border border-orange-400/20 shadow-2xl overflow-hidden">
                  {/* Inner subtle glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-red-500/8 to-orange-500/5 rounded-full"></div>
                  
                  {/* Sparkles icon on the left - exactly like reference */}
                  <div className="relative z-10 flex items-center pl-6 pr-4">
                    <motion.div
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.15, 1]
                      }}
                      transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                        scale: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                      className="flex items-center justify-center"
                    >
                      <Sparkles className="h-6 w-6 text-orange-300 drop-shadow-lg" />
                    </motion.div>
                  </div>
                  
                  {/* Input field with exact styling from reference */}
                  <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask about timetables, faculty, schedules..."
                    className="relative z-10 flex-1 bg-transparent border-0 text-orange-100 placeholder:text-orange-200/60 text-lg py-5 pr-3 focus:ring-0 focus:outline-none font-medium tracking-wide"
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    style={{ 
                      fontSize: '18px',
                      fontWeight: '500',
                      letterSpacing: '0.01em'
                    }}
                  />
                  
                  {/* Send button exactly like reference - circular with arrow */}
                  <div className="relative z-10 pr-3">
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.92 }}
                      className="relative"
                    >
                      {/* Button glow effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-orange-400/60 to-red-500/60 rounded-full blur-md opacity-70"></div>
                      
                      <button
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim()}
                        className="relative w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 hover:from-orange-400 hover:via-red-400 hover:to-orange-500 transition-all duration-300 flex items-center justify-center shadow-xl disabled:opacity-40 disabled:cursor-not-allowed border border-orange-300/20"
                      >
                        <motion.div
                          animate={inputValue.trim() ? { x: [0, 2, 0] } : {}}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <ArrowRight className="h-6 w-6 text-white drop-shadow-sm" />
                        </motion.div>
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-gray-400 mt-6 text-center opacity-70">
                AI can make mistakes. Verify important information.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}