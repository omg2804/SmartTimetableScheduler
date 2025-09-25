import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronRight, 
  ChevronLeft, 
  Building2, 
  GraduationCap, 
  Users, 
  Calendar, 
  BookOpen, 
  FlaskConical,
  User,
  Clock,
  Award,
  Plus,
  Trash2,
  CheckCircle,
  Sparkles
} from "lucide-react";

interface Teacher {
  id: string;
  name: string;
  subject: string;
  experience: string;
}

interface TimetableData {
  college: string;
  degree: string;
  branches: number;
  years: number;
  courses: string[];
  batches: number;
  labs: string[];
  teachers: Teacher[];
}

interface TimetableGeneratorProps {
  onGenerate: (data: TimetableData) => void;
  onClose: () => void;
}

export function TimetableGenerator({ onGenerate, onClose }: TimetableGeneratorProps) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<TimetableData>({
    college: "",
    degree: "",
    branches: 0,
    years: 0,
    courses: [],
    batches: 0,
    labs: [],
    teachers: []
  });

  const [tempCourse, setTempCourse] = useState("");
  const [tempLab, setTempLab] = useState("");
  const [tempTeacher, setTempTeacher] = useState({ name: "", subject: "", experience: "" });

  const totalSteps = 8;

  const collegeOptions = [
    "ABC Engineering College",
    "XYZ Institute of Technology", 
    "Tech University",
    "National Institute of Technology",
    "State Engineering College"
  ];

  const degreeOptions = [
    "Bachelor of Technology (B.Tech)",
    "Bachelor of Engineering (B.E)",
    "Master of Technology (M.Tech)",
    "Master of Computer Applications (MCA)",
    "Bachelor of Computer Applications (BCA)"
  ];

  const experienceOptions = [
    "0-2 years",
    "2-5 years", 
    "5-10 years",
    "10-15 years",
    "15+ years"
  ];

  const addCourse = () => {
    if (tempCourse && !data.courses.includes(tempCourse)) {
      setData(prev => ({
        ...prev,
        courses: [...prev.courses, tempCourse]
      }));
      setTempCourse("");
    }
  };

  const removeCourse = (course: string) => {
    setData(prev => ({
      ...prev,
      courses: prev.courses.filter(c => c !== course)
    }));
  };

  const addLab = () => {
    if (tempLab && !data.labs.includes(tempLab)) {
      setData(prev => ({
        ...prev,
        labs: [...prev.labs, tempLab]
      }));
      setTempLab("");
    }
  };

  const removeLab = (lab: string) => {
    setData(prev => ({
      ...prev,
      labs: prev.labs.filter(l => l !== lab)
    }));
  };

  const addTeacher = () => {
    if (tempTeacher.name && tempTeacher.subject && tempTeacher.experience) {
      const newTeacher: Teacher = {
        id: Date.now().toString(),
        ...tempTeacher
      };
      setData(prev => ({
        ...prev,
        teachers: [...prev.teachers, newTeacher]
      }));
      setTempTeacher({ name: "", subject: "", experience: "" });
    }
  };

  const removeTeacher = (id: string) => {
    setData(prev => ({
      ...prev,
      teachers: prev.teachers.filter(t => t.id !== id)
    }));
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const canProceed = () => {
    switch (step) {
      case 1: return data.college !== "";
      case 2: return data.degree !== "";
      case 3: return data.branches > 0;
      case 4: return data.years > 0;
      case 5: return data.courses.length > 0;
      case 6: return data.batches > 0;
      case 7: return true; // Labs are optional
      case 8: return data.teachers.length > 0;
      default: return false;
    }
  };

  const handleGenerate = async () => {
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("✅ Backend response:", result);
      
      if (result.success) {
        onGenerate(result);
      }
    } catch (err) {
      console.error("❌ Error while generating timetable:", err);
    }
  };


  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Building2 className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Select Your College</h2>
              <p className="text-gray-600">Choose your institution from the list or enter a custom name</p>
            </div>
            <div className="space-y-4">
              <Label htmlFor="college">College Name</Label>
              <Select value={data.college} onValueChange={(value) => setData(prev => ({ ...prev, college: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your college" />
                </SelectTrigger>
                <SelectContent>
                  {collegeOptions.map((college, index) => (
                    <SelectItem key={index} value={college}>{college}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="text-sm text-gray-500">
                Or enter custom college name:
              </div>
              <Input
                placeholder="Enter college name"
                value={data.college}
                onChange={(e) => setData(prev => ({ ...prev, college: e.target.value }))}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <GraduationCap className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Select Degree Program</h2>
              <p className="text-gray-600">Choose the degree program for timetable generation</p>
            </div>
            <div className="space-y-4">
              <Label htmlFor="degree">Degree Program</Label>
              <Select value={data.degree} onValueChange={(value) => setData(prev => ({ ...prev, degree: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select degree program" />
                </SelectTrigger>
                <SelectContent>
                  {degreeOptions.map((degree, index) => (
                    <SelectItem key={index} value={degree}>{degree}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Number of Branches</h2>
              <p className="text-gray-600">How many different branches/departments do you have?</p>
            </div>
            <div className="space-y-4">
              <Label htmlFor="branches">Number of Branches</Label>
              <Select value={data.branches.toString()} onValueChange={(value) => setData(prev => ({ ...prev, branches: parseInt(value) }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select number of branches" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <SelectItem key={num} value={num.toString()}>{num} Branch{num > 1 ? 'es' : ''}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Academic Years</h2>
              <p className="text-gray-600">How many years does the program span?</p>
            </div>
            <div className="space-y-4">
              <Label htmlFor="years">Number of Years</Label>
              <Select value={data.years.toString()} onValueChange={(value) => setData(prev => ({ ...prev, years: parseInt(value) }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select number of years" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <SelectItem key={num} value={num.toString()}>{num} Year{num > 1 ? 's' : ''}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Courses/Subjects</h2>
              <p className="text-gray-600">Add all the courses that need to be scheduled</p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Enter course name"
                  value={tempCourse}
                  onChange={(e) => setTempCourse(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addCourse()}
                />
                <Button onClick={addCourse} size="sm">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {data.courses.map((course, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    {course}
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-4 w-4 p-0 hover:bg-red-100"
                      onClick={() => removeCourse(course)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </Badge>
                ))}
              </div>
              {data.courses.length === 0 && (
                <p className="text-sm text-gray-500">No courses added yet. Add at least one course to continue.</p>
              )}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Users className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Number of Batches</h2>
              <p className="text-gray-600">How many batches/sections per year?</p>
            </div>
            <div className="space-y-4">
              <Label htmlFor="batches">Number of Batches</Label>
              <Select value={data.batches.toString()} onValueChange={(value) => setData(prev => ({ ...prev, batches: parseInt(value) }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select number of batches" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <SelectItem key={num} value={num.toString()}>{num} Batch{num > 1 ? 'es' : ''}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <FlaskConical className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Laboratory Sessions</h2>
              <p className="text-gray-600">Add laboratory sessions if any (optional)</p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Enter lab name (e.g., Computer Lab, Physics Lab)"
                  value={tempLab}
                  onChange={(e) => setTempLab(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addLab()}
                />
                <Button onClick={addLab} size="sm">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {data.labs.map((lab, index) => (
                  <Badge key={index} variant="outline" className="flex items-center gap-1">
                    {lab}
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-4 w-4 p-0 hover:bg-red-100"
                      onClick={() => removeLab(lab)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </Badge>
                ))}
              </div>
              {data.labs.length === 0 && (
                <p className="text-sm text-gray-500">No labs added. You can skip this step if no lab sessions are required.</p>
              )}
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <User className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Teacher Information</h2>
              <p className="text-gray-600">Add faculty members with their subjects and experience</p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <Input
                  placeholder="Teacher name"
                  value={tempTeacher.name}
                  onChange={(e) => setTempTeacher(prev => ({ ...prev, name: e.target.value }))}
                />
                <Input
                  placeholder="Subject"
                  value={tempTeacher.subject}
                  onChange={(e) => setTempTeacher(prev => ({ ...prev, subject: e.target.value }))}
                />
                <Select 
                  value={tempTeacher.experience} 
                  onValueChange={(value) => setTempTeacher(prev => ({ ...prev, experience: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Experience" />
                  </SelectTrigger>
                  <SelectContent>
                    {experienceOptions.map((exp, index) => (
                      <SelectItem key={index} value={exp}>{exp}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={addTeacher} className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Add Teacher
              </Button>
              
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {data.teachers.map((teacher) => (
                  <Card key={teacher.id} className="p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-indigo-600" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{teacher.name}</p>
                          <p className="text-xs text-gray-600">{teacher.subject} • {teacher.experience}</p>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => removeTeacher(teacher.id)}
                        className="text-red-600 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
              
              {data.teachers.length === 0 && (
                <p className="text-sm text-gray-500">No teachers added yet. Add at least one teacher to continue.</p>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-2xl"
      >
        <Card className="bg-white shadow-2xl">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-semibold text-gray-900">Generate Timetable</CardTitle>
                <CardDescription>Step {step} of {totalSteps} - Set up your academic structure</CardDescription>
              </div>
              <Button variant="ghost" size="sm" onClick={onClose}>
                ✕
              </Button>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
              <motion.div 
                className="bg-gradient-to-r from-red-500 to-orange-600 h-2 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${(step / totalSteps) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </CardHeader>
          
          <CardContent>
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              <Button 
                variant="outline" 
                onClick={prevStep} 
                disabled={step === 1}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              
              {step === totalSteps ? (
                <Button 
                  onClick={handleGenerate}
                  disabled={!canProceed()}
                  className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 flex items-center gap-2"
                >
                  <Sparkles className="h-4 w-4" />
                  Generate Timetable
                </Button>
              ) : (
                <Button 
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 flex items-center gap-2"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}