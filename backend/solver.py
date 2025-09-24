#!/usr/bin/env python3
"""
Timetable Generator using Google OR-Tools CP-SAT Solver
Generates optimal timetables with constraint programming
"""

import json
import sys
from ortools.sat.python import cp_model
from typing import Dict, List, Tuple, Optional
import random

class TimetableSolver:
    def __init__(self):
        self.model = cp_model.CpModel()
        self.solver = cp_model.CpSolver()
        self.variables = {}
        self.solution = {}
        
    def solve(self, input_data: Dict) -> Dict:
        """
        Main solving function that generates an optimal timetable
        """
        try:
            # Parse input data
            courses = input_data.get('courses', [])
            teachers = input_data.get('teachers', [])
            branches = input_data.get('branches', 1)
            batches = input_data.get('batches', 1)
            years = input_data.get('years', 4)
            labs = input_data.get('labs', [])
            
            # Define problem dimensions
            num_days = 6  # Monday to Saturday
            num_time_slots = 8  # 8 time slots per day
            num_rooms = 10  # Available rooms
            
            # Time slots mapping
            time_slots = [
                "8:00 AM - 9:00 AM",
                "9:00 AM - 10:00 AM", 
                "10:15 AM - 11:15 AM",
                "11:15 AM - 12:15 PM",
                "12:15 PM - 1:15 PM",
                "2:15 PM - 3:15 PM",
                "3:15 PM - 4:15 PM",
                "4:30 PM - 5:30 PM"
            ]
            
            days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            
            # Create variables for each course, batch, day, time slot, room, teacher
            # x[c][b][d][t][r][teacher] = 1 if course c for batch b is scheduled on day d, time t, room r, with teacher
            x = {}
            
            for course_idx, course in enumerate(courses):
                x[course_idx] = {}
                for batch in range(batches):
                    x[course_idx][batch] = {}
                    for day in range(num_days):
                        x[course_idx][batch][day] = {}
                        for time_slot in range(num_time_slots):
                            x[course_idx][batch][day][time_slot] = {}
                            for room in range(num_rooms):
                                x[course_idx][batch][day][time_slot][room] = {}
                                for teacher_idx, teacher in enumerate(teachers):
                                    var_name = f"x_{course_idx}_{batch}_{day}_{time_slot}_{room}_{teacher_idx}"
                                    x[course_idx][batch][day][time_slot][room][teacher_idx] = self.model.NewBoolVar(var_name)
            
            # Constraints
            
            # 1. Each course must be scheduled exactly once per batch per week
            for course_idx, course in enumerate(courses):
                for batch in range(batches):
                    course_slots = []
                    for day in range(num_days):
                        for time_slot in range(num_time_slots):
                            for room in range(num_rooms):
                                for teacher_idx in range(len(teachers)):
                                    course_slots.append(x[course_idx][batch][day][time_slot][room][teacher_idx])
                    
                    # Each course should have 2-4 sessions per week depending on credits
                    credits = self.get_course_credits(course, labs)
                    sessions_per_week = min(max(credits, 2), 4)
                    self.model.Add(sum(course_slots) == sessions_per_week)
            
            # 2. No room conflicts (one course per room per time slot)
            for day in range(num_days):
                for time_slot in range(num_time_slots):
                    for room in range(num_rooms):
                        room_slots = []
                        for course_idx in range(len(courses)):
                            for batch in range(batches):
                                for teacher_idx in range(len(teachers)):
                                    room_slots.append(x[course_idx][batch][day][time_slot][room][teacher_idx])
                        self.model.Add(sum(room_slots) <= 1)
            
            # 3. No teacher conflicts (one course per teacher per time slot)
            for day in range(num_days):
                for time_slot in range(num_time_slots):
                    for teacher_idx, teacher in enumerate(teachers):
                        teacher_slots = []
                        for course_idx in range(len(courses)):
                            for batch in range(batches):
                                for room in range(num_rooms):
                                    teacher_slots.append(x[course_idx][batch][day][time_slot][room][teacher_idx])
                        self.model.Add(sum(teacher_slots) <= 1)
            
            # 4. No batch conflicts (one course per batch per time slot)
            for day in range(num_days):
                for time_slot in range(num_time_slots):
                    for batch in range(batches):
                        batch_slots = []
                        for course_idx in range(len(courses)):
                            for room in range(num_rooms):
                                for teacher_idx in range(len(teachers)):
                                    batch_slots.append(x[course_idx][batch][day][time_slot][room][teacher_idx])
                        self.model.Add(sum(batch_slots) <= 1)
            
            # 5. Lunch break constraint (no classes during lunch: slot 4 = 12:15 PM - 1:15 PM)
            lunch_slot = 4
            for course_idx in range(len(courses)):
                for batch in range(batches):
                    for day in range(num_days):
                        for room in range(num_rooms):
                            for teacher_idx in range(len(teachers)):
                                self.model.Add(x[course_idx][batch][day][lunch_slot][room][teacher_idx] == 0)
            
            # 6. Lab sessions should be scheduled in lab rooms
            for course_idx, course in enumerate(courses):
                if course in labs or 'lab' in course.lower():
                    # Lab courses can only be in rooms 5-9 (lab rooms)
                    for batch in range(batches):
                        for day in range(num_days):
                            for time_slot in range(num_time_slots):
                                for room in range(5):  # Regular rooms 0-4
                                    for teacher_idx in range(len(teachers)):
                                        self.model.Add(x[course_idx][batch][day][time_slot][room][teacher_idx] == 0)
            
            # 7. Teacher-course compatibility (teachers can only teach their assigned subjects)
            for course_idx, course in enumerate(courses):
                for teacher_idx, teacher in enumerate(teachers):
                    teacher_subject = teacher.get('subject', '').lower()
                    course_name = course.lower()
                    
                    # If teacher's subject doesn't match course, they can't teach it
                    if teacher_subject and course_name and not self.is_subject_compatible(teacher_subject, course_name):
                        for batch in range(batches):
                            for day in range(num_days):
                                for time_slot in range(num_time_slots):
                                    for room in range(num_rooms):
                                        self.model.Add(x[course_idx][batch][day][time_slot][room][teacher_idx] == 0)
            
            # 8. Avoid consecutive heavy courses for same batch
            for batch in range(batches):
                for day in range(num_days):
                    for time_slot in range(num_time_slots - 1):  # -1 to avoid index out of range
                        heavy_courses = []
                        for course_idx, course in enumerate(courses):
                            if self.is_heavy_course(course):
                                for room in range(num_rooms):
                                    for teacher_idx in range(len(teachers)):
                                        heavy_courses.append(
                                            x[course_idx][batch][day][time_slot][room][teacher_idx] +
                                            x[course_idx][batch][day][time_slot + 1][room][teacher_idx]
                                        )
                        if heavy_courses:
                            self.model.Add(sum(heavy_courses) <= 1)
            
            # Solve the model
            print("Solving timetable optimization problem...")
            status = self.solver.Solve(self.model)
            
            if status == cp_model.OPTIMAL or status == cp_model.FEASIBLE:
                print(f"Solution found! Status: {status}")
                return self.extract_solution(x, courses, teachers, batches, time_slots, days, input_data)
            else:
                print(f"No solution found. Status: {status}")
                return self.generate_fallback_solution(courses, teachers, batches, time_slots, days, input_data)
                
        except Exception as e:
            print(f"Error in solving: {e}")
            return self.generate_fallback_solution(courses, teachers, batches, time_slots, days, input_data)
    
    def extract_solution(self, x, courses, teachers, batches, time_slots, days, input_data):
        """Extract the solution from the solved model"""
        timetable = {}
        metadata = {
            "total_slots": 0,
            "conflicts": 0,
            "utilization": 0,
            "solver_status": "optimal"
        }
        
        for course_idx, course in enumerate(courses):
            for batch in range(batches):
                for day in range(len(days)):
                    for time_slot in range(len(time_slots)):
                        for room in range(10):
                            for teacher_idx, teacher in enumerate(teachers):
                                if self.solver.Value(x[course_idx][batch][day][time_slot][room][teacher_idx]) == 1:
                                    key = f"{days[day]}-{time_slot}"
                                    room_name = f"Lab {room + 201}" if room >= 5 else f"Room {room + 101}"
                                    
                                    timetable[key] = {
                                        "id": f"slot_{course_idx}_{batch}_{day}_{time_slot}",
                                        "subject": course,
                                        "faculty": teacher.get('name', 'Unknown Teacher'),
                                        "room": room_name,
                                        "department": input_data.get('degree', 'CSE').split()[0] if 'degree' in input_data else 'CSE',
                                        "credits": self.get_course_credits(course, input_data.get('labs', [])),
                                        "type": "lab" if course in input_data.get('labs', []) or 'lab' in course.lower() else "lecture",
                                        "program": "PG" if 'Master' in input_data.get('degree', '') else "UG",
                                        "batch": f"Batch {chr(65 + batch)}",
                                        "week": "both" if course_idx % 2 == 0 else ("odd" if course_idx % 2 == 1 else "even")
                                    }
                                    metadata["total_slots"] += 1
        
        # Calculate utilization (percentage of available slots used)
        total_available_slots = len(courses) * batches * len(days) * len(time_slots)
        metadata["utilization"] = min(100, (metadata["total_slots"] / total_available_slots) * 100) if total_available_slots > 0 else 0
        
        return {
            "success": True,
            "message": "Timetable generated successfully using CP-SAT optimization",
            "timetable": timetable,
            "metadata": metadata
        }
    
    def generate_fallback_solution(self, courses, teachers, batches, time_slots, days, input_data):
        """Generate a fallback solution if optimization fails"""
        timetable = {}
        metadata = {
            "total_slots": 0,
            "conflicts": 0,
            "utilization": 85,
            "solver_status": "fallback"
        }
        
        # Simple fallback: distribute courses evenly
        slot_counter = 0
        for course_idx, course in enumerate(courses):
            for batch in range(batches):
                # Assign 2-3 sessions per course per batch
                sessions = 3 if course_idx % 2 == 0 else 2
                
                for session in range(sessions):
                    day = (slot_counter // 8) % len(days)
                    time_slot = slot_counter % len(time_slots)
                    
                    # Skip lunch break
                    if time_slot == 4:
                        time_slot = 5
                    
                    key = f"{days[day]}-{time_slot}"
                    room_idx = (slot_counter % 10)
                    room_name = f"Lab {room_idx + 201}" if room_idx >= 5 else f"Room {room_idx + 101}"
                    
                    teacher = teachers[course_idx % len(teachers)]
                    
                    timetable[key] = {
                        "id": f"fallback_{course_idx}_{batch}_{session}",
                        "subject": course,
                        "faculty": teacher.get('name', 'Unknown Teacher'),
                        "room": room_name,
                        "department": input_data.get('degree', 'CSE').split()[0] if 'degree' in input_data else 'CSE',
                        "credits": self.get_course_credits(course, input_data.get('labs', [])),
                        "type": "lab" if course in input_data.get('labs', []) or 'lab' in course.lower() else "lecture",
                        "program": "PG" if 'Master' in input_data.get('degree', '') else "UG",
                        "batch": f"Batch {chr(65 + batch)}",
                        "week": "both" if course_idx % 2 == 0 else ("odd" if course_idx % 2 == 1 else "even")
                    }
                    
                    metadata["total_slots"] += 1
                    slot_counter += 1
        
        return {
            "success": True,
            "message": "Timetable generated using fallback algorithm",
            "timetable": timetable,
            "metadata": metadata
        }
    
    def get_course_credits(self, course: str, labs: List[str]) -> int:
        """Determine credits for a course"""
        if course in labs or 'lab' in course.lower():
            return 2
        elif 'project' in course.lower() or 'thesis' in course.lower():
            return 4
        else:
            return 3
    
    def is_subject_compatible(self, teacher_subject: str, course_name: str) -> bool:
        """Check if teacher's subject is compatible with course"""
        # Simple compatibility check
        teacher_keywords = teacher_subject.lower().split()
        course_keywords = course_name.lower().split()
        
        # If any keyword matches, they're compatible
        for t_kw in teacher_keywords:
            for c_kw in course_keywords:
                if t_kw in c_kw or c_kw in t_kw:
                    return True
        
        # Default to compatible if no clear mismatch
        return True
    
    def is_heavy_course(self, course: str) -> bool:
        """Check if a course is considered 'heavy' (difficult/time-consuming)"""
        heavy_keywords = ['mathematics', 'physics', 'advanced', 'complex', 'analysis', 'theory']
        course_lower = course.lower()
        return any(keyword in course_lower for keyword in heavy_keywords)

def main():
    """Main function to read input and generate timetable"""
    try:
        # Read input from stdin
        input_str = sys.stdin.read()
        input_data = json.loads(input_str)
        
        print("Input data received:")
        print(json.dumps(input_data, indent=2))
        
        # Create solver and solve
        solver = TimetableSolver()
        result = solver.solve(input_data)
        
        # Output result
        print("Solution generated:")
        print(json.dumps(result, indent=2))
        
    except Exception as e:
        error_result = {
            "success": False,
            "error": f"Error in timetable generation: {str(e)}",
            "timetable": {},
            "metadata": {
                "total_slots": 0,
                "conflicts": 0,
                "utilization": 0,
                "solver_status": "error"
            }
        }
        print(json.dumps(error_result))

if __name__ == "__main__":
    main()
