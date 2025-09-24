# 🛠️ Custom Components

## Overview
This document catalogs all custom-built components in the AI-Powered Timetable Manager application.

## Core Application Components

### 1. LoadingScreen (`/components/LoadingScreen.tsx`)
**Purpose**: 3.5-second animated loading screen displayed before landing page

#### Key Features
- Floating gradient orbs with complex motion paths
- Rotating brain icon with pulsing halo effect
- Feature showcase with animated icons
- Progressive loading bar animation
- Sparkle effects with varied timing

#### Animation Complexity
```tsx
// Multi-axis orb movement
animate={{ 
  opacity: 1, 
  scale: 1, 
  x: 0,
  y: [0, -30, 0],           // Vertical floating
  rotate: [0, 180, 360]     // Continuous rotation
}}
transition={{ 
  y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
  rotate: { duration: 20, repeat: Infinity, ease: "linear" }
}}
```

#### Visual Elements
- **Background**: Black gradient with animated orbs
- **Logo**: Rotating brain icon with gradient background
- **Progress**: Sliding gradient progress bar
- **Icons**: Sparkles, Calendar, Users with floating animations

### 2. LandingPage (`/components/LandingPage.tsx`)
**Purpose**: Main marketing page with hero section and feature showcase

#### Key Sections
- **Hero Section**: Black background with red/orange gradients
- **Features Section**: Navy/teal professional theme
- **Visual Section**: Modern classroom showcase
- **Testimonials**: User reviews and ratings

#### Complex Animations
```tsx
// Floating demo cards with rotation
<motion.div
  initial={{ opacity: 0, y: 20, rotate: -5 }}
  animate={{ opacity: 1, y: 0, rotate: -5 }}
  transition={{ duration: 0.8, delay: 1.4 }}
  className="absolute -top-8 -left-8 bg-white/10 backdrop-blur-sm rounded-lg p-4"
>
```

#### Responsive Features
- Mobile-first design approach
- Breakpoint-specific animations
- Adaptive content layout
- Touch-friendly interactions

### 3. AIAssistant (`/components/AIAssistant.tsx`)
**Purpose**: Floating AI chat assistant with advanced glow input design

#### Unique Features
- **Multi-layer glow input**: 4-layer glow effect matching reference design
- **Glassmorphism UI**: Dark theme with backdrop blur
- **Smart conversations**: Context-aware responses
- **Quick suggestions**: Predefined helpful queries
- **Floating button**: Pulsing ring with notification dot

#### Glow Input Implementation
```tsx
// Four-layer glow system
<div className="absolute -inset-8 bg-gradient-to-r from-orange-600/20 via-red-500/30 via-orange-500/25 to-red-600/20 rounded-full blur-3xl opacity-90"></div>
<div className="absolute -inset-6 bg-gradient-to-r from-orange-500/30 via-red-500/40 to-orange-500/30 rounded-full blur-2xl opacity-95"></div>
<div className="absolute -inset-3 bg-gradient-to-r from-orange-400/50 via-red-400/60 to-orange-400/50 rounded-full blur-xl opacity-100"></div>
<div className="absolute -inset-1 bg-gradient-to-r from-orange-300/40 to-red-300/40 rounded-full blur-sm opacity-80"></div>
```

#### AI Response Logic
- Faculty availability queries
- Workload distribution analysis
- Conflict detection and resolution
- Room availability checking
- Contextual suggestions

### 4. LoginPage (`/components/LoginPage.tsx`)
**Purpose**: Authentication interface with role-based login

#### Features
- **Role Selection**: Admin, Principal, Teacher, Student
- **Visual Consistency**: Matches landing page aesthetic
- **Form Validation**: User input validation
- **Navigation**: Back to landing page option

#### Role-Based Access
```tsx
type UserRole = "admin" | "principal" | "teacher" | "student";

interface User {
  role: UserRole;
  username: string;
}
```

### 5. Header (`/components/Header.tsx`)
**Purpose**: Application header with user info and logout

#### Components
- User role display with appropriate icons
- Logout functionality
- Consistent branding
- Responsive layout

### 6. Sidebar (`/components/Sidebar.tsx`)
**Purpose**: Collapsible navigation sidebar with role-based menu items

#### Features
- **Role-based navigation**: Different menu items per user role
- **Active state management**: Highlights current page
- **Collapsible design**: Space-efficient layout
- **Icon integration**: Lucide icons for all menu items

#### Navigation Structure
```tsx
// Role-specific menu items
const getMenuItems = (userRole: UserRole) => {
  const baseItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "timetable", label: "Timetable", icon: Calendar },
    { id: "faculty", label: "Faculty", icon: Users },
    { id: "rooms", label: "Rooms", icon: Building }
  ];
  
  // Add admin/principal specific items
  if (userRole === "admin" || userRole === "principal") {
    baseItems.push({ id: "approvals", label: "Approvals", icon: CheckCircle });
  }
  
  return baseItems;
};
```

### 7. RoleBasedDashboard (`/components/RoleBasedDashboard.tsx`)
**Purpose**: Dynamic dashboard content based on user role

#### Role Variations
- **Admin**: Full system overview with all metrics
- **Principal**: Academic oversight and approval focus
- **Teacher**: Personal schedule and class management
- **Student**: Class schedule and assignment view

#### Adaptive Content
```tsx
// Role-specific dashboard content
const getDashboardContent = (role: UserRole) => {
  switch (role) {
    case "admin":
      return <AdminDashboard />;
    case "principal":
      return <PrincipalDashboard />;
    case "teacher":
      return <TeacherDashboard />;
    case "student":
      return <StudentDashboard />;
  }
};
```

### 8. TimetableGrid (`/components/TimetableGrid.tsx`)
**Purpose**: Interactive timetable display with drag-and-drop capability

#### Features
- **Grid Layout**: Time slots and days visualization
- **Drag-and-Drop**: Schedule modification (planned)
- **Conflict Highlighting**: Visual conflict indicators
- **Responsive Design**: Mobile-friendly grid adaptation

### 9. TimetableGenerator (`/components/TimetableGenerator.tsx`)
**Purpose**: 8-step AI-powered timetable generation workflow

#### Generation Steps
1. **Academic Year**: Year and semester selection
2. **Departments**: Department and program selection
3. **Faculty**: Faculty member assignment
4. **Subjects**: Course and subject mapping
5. **Rooms**: Classroom and lab allocation
6. **Constraints**: Special requirements and restrictions
7. **AI Generation**: Automated schedule creation
8. **Review**: Final timetable review and approval

#### Workflow Implementation
```tsx
const steps = [
  { id: 1, title: "Academic Year", description: "Select academic year and semester" },
  { id: 2, title: "Departments", description: "Choose departments and programs" },
  { id: 3, title: "Faculty", description: "Assign faculty members" },
  // ... additional steps
];

const [currentStep, setCurrentStep] = useState(1);
const [formData, setFormData] = useState({});
```

### 10. ApprovalWorkflow (`/components/ApprovalWorkflow.tsx`)
**Purpose**: Timetable change approval system for admin/principal users

#### Workflow Features
- **Pending Requests**: List of schedule change requests
- **Approval Actions**: Approve/reject with comments
- **Status Tracking**: Request status visualization
- **Comment System**: Feedback and communication
- **Notification Integration**: Status change alerts

#### Request Management
```tsx
interface ApprovalRequest {
  id: string;
  type: "schedule_change" | "room_booking" | "faculty_assignment";
  requester: string;
  status: "pending" | "approved" | "rejected";
  details: string;
  timestamp: Date;
  comments?: string[];
}
```

### 11. Dashboard (`/components/Dashboard.tsx`)
**Purpose**: Base dashboard component with stats and quick actions

#### Dashboard Elements
- **Stats Cards**: Key performance indicators
- **Quick Actions**: Common task shortcuts
- **Recent Activity**: Latest system activities
- **Alerts**: Important notifications

## Component Architecture Patterns

### State Management
```tsx
// Local state for UI components
const [isOpen, setIsOpen] = useState(false);
const [activeStep, setActiveStep] = useState(1);

// Props for data flow
interface ComponentProps {
  userRole: UserRole;
  onAction: (data: any) => void;
}
```

### Animation Integration
```tsx
// Consistent animation patterns
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

### Responsive Design
```tsx
// Mobile-first approach
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Responsive grid layout */}
</div>
```

## Design System Integration

### Color Consistency
All custom components follow the established color schemes:
- **Black/Red-Orange**: Landing page hero section
- **Navy/Teal**: Professional sections
- **Gray/White with Red accents**: Dashboard areas

### Typography Harmony
Components respect the global typography system from `/styles/globals.css`:
- Consistent font weights and sizes
- Proper line heights and spacing
- Responsive text scaling

### Animation Coherence
Shared animation patterns across components:
- Entry animations with staggered delays
- Hover effects with consistent timing
- Loading states with similar aesthetics

## Performance Considerations

### Code Splitting
```tsx
// Lazy loading for non-critical components
const TimetableGenerator = lazy(() => import('./TimetableGenerator'));
```

### Memoization
```tsx
// Prevent unnecessary re-renders
const MemoizedComponent = memo(({ data }) => {
  return <ExpensiveComponent data={data} />;
});
```

### Efficient Animations
```tsx
// GPU-accelerated transforms
animate={{ x: 20, scale: 1.1 }}  // ✅ Good
animate={{ left: 20 }}           // ❌ Avoid
```

## Future Enhancements

### Planned Features
1. **Real-time Collaboration**: Multi-user timetable editing
2. **Advanced Drag-and-Drop**: Visual schedule manipulation
3. **Export Functionality**: PDF/Excel export options
4. **Mobile App Support**: Progressive Web App features
5. **Advanced Analytics**: Usage and performance metrics

### Component Extensibility
```tsx
// Extensible component patterns
interface ExtensibleComponentProps {
  children?: React.ReactNode;
  customActions?: ActionItem[];
  onCustomEvent?: (event: CustomEvent) => void;
}
```