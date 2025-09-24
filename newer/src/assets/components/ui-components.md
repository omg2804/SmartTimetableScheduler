# 🧩 ShadCN UI Components

## Overview
This document catalogs all ShadCN UI components used in the AI-Powered Timetable Manager application.

## Core Components Used

### Layout & Structure
- **`Card`** - Primary container component for content sections
- **`CardContent`** - Content area within cards
- **`CardHeader`** - Header section of cards
- **`CardTitle`** - Title element within card headers
- **`CardDescription`** - Descriptive text in card headers

### Interactive Elements
- **`Button`** - Primary interactive element for actions
- **`Input`** - Text input fields
- **`Badge`** - Status indicators and labels
- **`ScrollArea`** - Scrollable content containers

### Data Display
- **`Table`** (available but not actively used in current implementation)
- **`Tabs`** (available for future tabbed interfaces)

## Component Usage by Section

### Landing Page (`/components/LandingPage.tsx`)
```tsx
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

// Usage examples:
<Button 
  size="lg" 
  onClick={onGetStarted}
  className="bg-gradient-to-r from-red-500 to-orange-600"
>
  Start Free Trial
</Button>

<Badge className="bg-red-500/20 text-red-300 border-red-500/30">
  AI-Powered Solution
</Badge>

<Card className="bg-gradient-to-br from-blue-600/90 to-blue-700/90">
  <CardHeader>
    <CardTitle>AI-Powered Scheduling</CardTitle>
  </CardHeader>
  <CardContent>
    <CardDescription>
      Intelligent algorithms automatically generate optimal timetables
    </CardDescription>
  </CardContent>
</Card>
```

### AI Assistant (`/components/AIAssistant.tsx`)
```tsx
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";

// Usage examples:
<Card className="relative w-full h-full bg-transparent border-0">
  <CardHeader className="flex flex-row items-center justify-between">
    <CardTitle className="text-lg flex items-center gap-3 text-white">
      AI Assistant
    </CardTitle>
  </CardHeader>
  <CardContent className="flex-1 flex flex-col">
    <ScrollArea className="flex-1 p-5">
      {/* Messages */}
    </ScrollArea>
  </CardContent>
</Card>
```

### Dashboard Components (`/App.tsx`)
```tsx
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";

// Stats cards
<Card className="bg-white/90 backdrop-blur-sm border-red-200/50">
  <CardContent className="p-6">
    <div className="text-2xl font-medium text-gray-900">24</div>
    <div className="text-sm text-gray-600">Total Faculty</div>
  </CardContent>
</Card>

// Status badges
<Badge className="bg-green-100 text-green-800 border-green-200">
  Available
</Badge>
```

## Component Customization Patterns

### Button Variants
```tsx
// Primary CTA buttons
<Button 
  size="lg"
  className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700"
>

// Outline buttons  
<Button 
  variant="outline"
  className="border-gray-600 text-gray-300 hover:bg-gray-800"
>

// Ghost buttons
<Button
  variant="ghost"
  size="sm"
  className="text-gray-400 hover:text-white hover:bg-gray-800/50"
>
```

### Card Styling Patterns
```tsx
// Glassmorphism cards
<Card className="bg-white/90 backdrop-blur-sm border-red-200/50 shadow-lg hover:shadow-xl transition-all duration-300">

// Dark theme cards (AI Assistant)
<Card className="relative w-full h-full bg-transparent border-0">

// Gradient cards (Landing page features)
<Card className="bg-gradient-to-br from-blue-600/90 to-blue-700/90 backdrop-blur-sm border shadow-xl">
```

### Badge Variations
```tsx
// Status badges
<Badge className="bg-green-100 text-green-800 border-green-200">Success</Badge>
<Badge className="bg-orange-100 text-orange-800 border-orange-200">Warning</Badge>
<Badge className="bg-red-100 text-red-800 border-red-200">Error</Badge>

// Feature badges  
<Badge className="bg-red-500/20 text-red-300 border-red-500/30">AI-Powered</Badge>
<Badge className="bg-teal-500/20 text-teal-200 border-teal-400/30">Features</Badge>
```

## Available But Unused Components

The following ShadCN components are available in `/components/ui/` but not currently used:

### Form Components
- **`Checkbox`** - For multi-select options
- **`Radio Group`** - For single-select options  
- **`Select`** - For dropdown selections
- **`Textarea`** - For multi-line text input
- **`Form`** - For form validation and structure

### Navigation Components
- **`Navigation Menu`** - For complex navigation structures
- **`Menubar`** - For application menu bars
- **`Breadcrumb`** - For navigation breadcrumbs
- **`Pagination`** - For paginated content

### Overlay Components
- **`Dialog`** - For modal dialogs
- **`Sheet`** - For slide-in panels
- **`Popover`** - For contextual overlays
- **`Tooltip`** - For hover information
- **`Hover Card`** - For rich hover content
- **`Context Menu`** - For right-click menus
- **`Dropdown Menu`** - For action menus

### Feedback Components
- **`Alert`** - For system messages
- **`Alert Dialog`** - For confirmations
- **`Progress`** - For progress indicators
- **`Skeleton`** - For loading states
- **`Sonner`** - For toast notifications

### Advanced Components
- **`Command`** - For command palettes
- **`Calendar`** - For date selection
- **`Carousel`** - For content sliders
- **`Collapsible`** - For expandable content
- **`Accordion`** - For FAQ-style content
- **`Resizable`** - For resizable panels
- **`Sidebar`** - For navigation sidebars (different from current custom sidebar)
- **`Slider`** - For range inputs
- **`Switch`** - For toggle switches
- **`Toggle`** - For on/off states
- **`Toggle Group`** - For grouped toggles

## Integration Guidelines

### Theme Consistency
All ShadCN components automatically inherit the theme from `/styles/globals.css`:
- CSS custom properties for colors
- Consistent border radius (`--radius: 0.625rem`)
- Typography scales and weights
- Dark mode support

### Customization Strategy
```tsx
// Extend default styles rather than replace
<Button className="bg-gradient-to-r from-red-500 to-orange-600 [existing-button-styles]">

// Use CSS custom properties for theme consistency
<Card className="bg-card border-border [additional-styles]">

// Maintain component accessibility features
<Button size="lg" aria-label="Start free trial">
```

### Animation Integration
```tsx
// Combine ShadCN components with Motion
<motion.div whileHover={{ scale: 1.05 }}>
  <Card className="hover:shadow-xl transition-shadow">
    ...
  </Card>
</motion.div>
```

## Future Component Usage

### Recommended Additions
Based on the application's functionality, these components would be valuable:

1. **`Dialog`** - For timetable editing modals
2. **`Select`** - For faculty/room selection in forms
3. **`Calendar`** - For date-based scheduling
4. **`Progress`** - For timetable generation progress
5. **`Alert`** - For system notifications
6. **`Command`** - For quick actions/search
7. **`Tooltip`** - For UI guidance and help text

### Implementation Examples
```tsx
// Timetable editing dialog
<Dialog>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Class Schedule</DialogTitle>
    </DialogHeader>
    <form>
      <Select placeholder="Select Faculty">
        <SelectItem value="dr-johnson">Dr. Sarah Johnson</SelectItem>
      </Select>
    </form>
  </DialogContent>
</Dialog>

// Progress indicator for AI generation
<Progress value={generationProgress} className="w-full" />

// Quick action command palette
<Command>
  <CommandInput placeholder="Search actions..." />
  <CommandList>
    <CommandGroup heading="Quick Actions">
      <CommandItem>Generate Timetable</CommandItem>
      <CommandItem>Check Conflicts</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
```