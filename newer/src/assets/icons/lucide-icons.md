# 🎯 Lucide React Icons

## Overview
This document catalogs all Lucide React icons used throughout the AI-Powered Timetable Manager application.

## Core Application Icons

### Navigation & UI
- **`Brain`** - Main logo, AI assistant, loading screen
- **`Calendar`** - Timetable/scheduling features, calendar views
- **`Users`** - Faculty management, user roles, multi-role access
- **`Building2`** - Rooms/facilities, classroom management
- **`Settings`** - Configuration pages, system settings
- **`MessageCircle`** - Chat functionality, AI assistant

### Interactive Elements
- **`ArrowRight`** - Navigation buttons, progression indicators
- **`X`** - Close buttons, dismiss actions
- **`Send`** - Message sending, form submissions
- **`Play`** - Demo videos, media controls
- **`Mic`** - Voice input functionality

### Status & Feedback
- **`CheckCircle`** - Confirmations, approvals, success states
- **`AlertTriangle`** - Warnings, conflicts, error states
- **`Clock`** - Time-related features, scheduling
- **`Star`** - Reviews, ratings, featured content
- **`Sparkles`** - AI features, premium functionality

### Analytics & Data
- **`TrendingUp`** - Performance metrics, growth indicators
- **`BarChart3`** - Analytics dashboards, data visualization
- **`BookOpen`** - Academic content, educational features

### Security & System
- **`Shield`** - Security features, protection
- **`Zap`** - Quick actions, speed, efficiency

## Usage by Component

### `/components/LandingPage.tsx`
```tsx
import { 
  Brain,           // Main logo/branding
  Calendar,        // Feature icons
  Users,           // Multi-role access
  Building2,       // Facilities management
  CheckCircle,     // Success indicators
  Clock,           // Time features
  TrendingUp,      // Analytics
  BookOpen,        // Academic features
  Star,            // Reviews/testimonials
  ArrowRight,      // CTA buttons
  Zap,             // Quick features
  Shield,          // Security
  BarChart3,       // Data visualization
  Sparkles,        // AI branding
  Play             // Demo buttons
} from "lucide-react";
```

### `/components/LoadingScreen.tsx`
```tsx
import { 
  Brain,           // Rotating logo
  Sparkles,        // AI branding
  Calendar,        // Feature showcase
  Users            // Multi-role indicator
} from "lucide-react";
```

### `/components/AIAssistant.tsx`
```tsx
import { 
  MessageCircle,   // Chat functionality
  X,               // Close button
  Send,            // Message sending
  Mic,             // Voice input
  Clock,           // Time queries
  Users,           // Faculty queries
  Calendar,        // Schedule queries
  AlertTriangle,   // Conflict warnings
  Sparkles,        // AI branding
  ArrowRight       // Send button
} from "lucide-react";
```

### `/App.tsx` (Main Application)
```tsx
import { 
  Users,           // Faculty tab
  Building,        // Rooms tab
  Settings         // Settings tab
} from "lucide-react";
```

## Icon Styling Patterns

### Size Classes
- **Small icons**: `h-4 w-4` (16px) - Used in badges, small buttons
- **Medium icons**: `h-5 w-5` (20px) - Used in navigation, cards
- **Large icons**: `h-6 w-6` (24px) - Used in headers, feature cards
- **Extra large**: `h-7 w-7` (28px) - Used in prominent features
- **Hero size**: `h-12 w-12` (48px) - Used in loading screen, main branding

### Color Schemes by Section

#### Black Upper Section (Landing Page)
- **Primary**: `text-white` - Main icons
- **Accent**: `text-red-400`, `text-orange-400` - Feature highlights
- **Secondary**: `text-gray-300` - Supporting icons

#### Navy/Teal Section (Landing Page Lower)
- **Primary**: `text-white` - Main content icons
- **Accent**: `text-teal-200`, `text-cyan-200` - Feature highlights
- **Card specific**: `text-blue-200`, `text-indigo-200` - Card icons

#### Dashboard (Gray/White with Red/Orange)
- **Primary**: `text-gray-900` - Main content
- **Accent**: `text-red-600`, `text-orange-600` - Interactive elements
- **Status colors**: `text-green-600`, `text-yellow-600` - Status indicators

## Animation Patterns

### Rotation Effects
```tsx
// Continuous rotation (Brain icon in loading)
animate={{ rotate: [0, 360] }}
transition={{ duration: 3, repeat: Infinity, ease: "linear" }}

// Sparkles rotation
animate={{ rotate: [0, 360] }}
transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
```

### Hover Effects
```tsx
// Scale on hover
whileHover={{ scale: 1.1 }}
whileTap={{ scale: 0.95 }}

// Movement effects
animate={{ x: [0, 5, 0] }}
transition={{ duration: 2, repeat: Infinity }}
```

### Pulsing Effects
```tsx
// Breathing animation
animate={{ scale: [1, 1.1, 1] }}
transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
```

## Accessibility Considerations

### Semantic Usage
- Icons are paired with text labels for clarity
- Proper alt text provided where needed
- Consistent icon-meaning relationships maintained

### Color Contrast
- Icons meet WCAG contrast requirements
- Alternative text provided for screen readers
- Icons work in both light and dark themes

## Icon Selection Guidelines

### When Adding New Icons
1. **Consistency**: Choose icons that match Lucide's design language
2. **Recognition**: Use commonly understood symbols
3. **Context**: Ensure icons fit the educational/academic context
4. **Scalability**: Icons should work at all required sizes
5. **Accessibility**: Consider color-blind users and screen readers

### Recommended Alternatives
If specific functionality needs new icons:
- **`GraduationCap`** - For academic achievements
- **`Library`** - For resource management
- **`FileText`** - For documents/reports
- **`Bell`** - For notifications
- **`Search`** - For search functionality
- **`Filter`** - For filtering options
- **`Download`** - For export features
- **`Upload`** - For import features