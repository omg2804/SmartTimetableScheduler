# 📝 Typography System

## Overview
This document details the typography system used throughout the AI-Powered Timetable Manager application, including font configurations, sizing, and usage patterns.

## Base Typography Configuration

### Font Settings (from `/styles/globals.css`)
```css
:root {
  --font-size: 14px;                    /* Base font size */
  --font-weight-medium: 500;            /* Medium weight */
  --font-weight-normal: 400;            /* Normal weight */
}

html {
  font-size: var(--font-size);
}
```

## Heading Hierarchy

### Default Heading Styles
```css
h1 {
  font-size: var(--text-2xl);          /* ~24px at 14px base */
  font-weight: var(--font-weight-medium);
  line-height: 1.5;
}

h2 {
  font-size: var(--text-xl);           /* ~20px at 14px base */
  font-weight: var(--font-weight-medium);
  line-height: 1.5;
}

h3 {
  font-size: var(--text-lg);           /* ~18px at 14px base */
  font-weight: var(--font-weight-medium);
  line-height: 1.5;
}

h4 {
  font-size: var(--text-base);         /* 14px base */
  font-weight: var(--font-weight-medium);
  line-height: 1.5;
}
```

### Body Text Styles
```css
p {
  font-size: var(--text-base);         /* 14px base */
  font-weight: var(--font-weight-normal);
  line-height: 1.5;
}

label {
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  line-height: 1.5;
}

button {
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  line-height: 1.5;
}

input {
  font-size: var(--text-base);
  font-weight: var(--font-weight-normal);
  line-height: 1.5;
}
```

## Typography Usage by Component

### Landing Page Typography
```tsx
// Hero title - Large, dramatic
<h1 className="text-4xl lg:text-5xl font-medium text-white leading-tight">
  Smart Timetable Management for Modern Institutions
</h1>

// Hero subtitle - Readable, supporting
<p className="text-xl text-gray-300 leading-relaxed max-w-lg">
  Revolutionize your academic scheduling with AI-driven automation
</p>

// Section headings - Professional
<h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
  Everything you need for perfect scheduling
</h2>

// Feature descriptions
<p className="text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
  Our comprehensive suite of tools ensures your institution runs smoothly
</p>
```

### Dashboard Typography
```tsx
// Page titles
<h1 className="text-3xl font-medium text-gray-900">Faculty Availability</h1>

// Page descriptions
<p className="text-gray-600 mt-2">Manage faculty schedules and availability</p>

// Card titles
<CardTitle className="text-xl font-semibold text-white leading-tight">
  AI-Powered Scheduling
</CardTitle>

// Card descriptions
<CardDescription className="text-slate-100 text-base leading-relaxed">
  Intelligent algorithms automatically generate optimal timetables
</CardDescription>
```

### AI Assistant Typography
```tsx
// Assistant title
<p className="font-semibold text-white">AI Assistant</p>

// Assistant subtitle
<p className="text-xs text-orange-300/90">Smart Timetable Helper</p>

// Message content
<p className="text-sm leading-relaxed">{message.content}</p>

// Input placeholder - custom styling
<input
  placeholder="Ask about timetables, faculty, schedules..."
  className="text-lg py-5 font-medium tracking-wide"
  style={{ 
    fontSize: '18px',
    fontWeight: '500',
    letterSpacing: '0.01em'
  }}
/>
```

## Font Weight Usage Patterns

### Weight Hierarchy
- **font-medium (500)**: Headings, buttons, labels, important text
- **font-normal (400)**: Body text, paragraphs, inputs
- **font-semibold (600)**: Emphasized headings (used sparingly)

### Implementation Examples
```tsx
// Headings
className="font-medium"         // Most headings
className="font-semibold"       // Important section headings

// Body text
className="font-normal"         // Paragraphs, descriptions

// Interactive elements
className="font-medium"         // Buttons, links, labels
```

## Font Size Scale

### Responsive Size Classes
```tsx
// Extra large displays
className="text-4xl lg:text-5xl"    // Hero headings
className="text-3xl lg:text-4xl"    // Major section headings
className="text-2xl lg:text-3xl"    // Subsection headings

// Standard sizes
className="text-xl"                  // Large body text, subtitles
className="text-lg"                  // Emphasized body text
className="text-base"                // Default body text
className="text-sm"                  // Secondary text, captions
className="text-xs"                  // Fine print, labels
```

### AI Assistant Custom Sizing
```tsx
// Large input text for prominence
style={{ 
  fontSize: '18px',           // Larger than default base
  fontWeight: '500',          // Medium weight
  letterSpacing: '0.01em'     // Slight letter spacing
}}
```

## Line Height Patterns

### Standard Line Heights
- **line-height: 1.5**: Default for all text elements
- **leading-tight**: Compressed spacing for large headings
- **leading-relaxed**: Expanded spacing for readability

### Usage Examples
```tsx
// Tight spacing for large headings
className="text-4xl font-medium leading-tight"

// Relaxed spacing for body text
className="text-xl leading-relaxed"

// Default spacing (1.5)
// Applied automatically via CSS base styles
```

## Color Typography Combinations

### By Section Theme

#### Black Upper Section
```tsx
// Primary text
className="text-white"                    // Main headings
className="text-gray-300"                 // Secondary text

// Gradient text effects
className="bg-gradient-to-r from-red-400 via-orange-400 to-red-600 bg-clip-text text-transparent"
```

#### Navy/Teal Section
```tsx
// On dark backgrounds
className="text-white"                    // Headings
className="text-slate-200"                // Body text
className="text-teal-200"                 // Accents

// On light backgrounds
className="text-slate-900"                // Headings
className="text-slate-600"                // Body text
```

#### Dashboard Section
```tsx
// Standard text
className="text-gray-900"                 // Headings
className="text-gray-600"                 // Body text
className="text-gray-700"                 // Secondary body

// Status colors
className="text-green-600"                // Success
className="text-orange-600"               // Warning
className="text-red-600"                  // Error
```

## Typography Accessibility

### Contrast Compliance
All text combinations meet WCAG 2.1 AA standards:
- Minimum 4.5:1 contrast ratio for normal text
- Minimum 3:1 contrast ratio for large text (18px+ or 14px+ bold)

### Readable Font Sizing
- Base font size of 14px ensures readability across devices
- Scalable sizing system maintains proportions
- Minimum touch target size of 44px for interactive elements

## Custom Typography Components

### Gradient Text Effect
```tsx
// Reusable gradient text pattern
<span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-600 bg-clip-text text-transparent">
  Modern Institutions
</span>
```

### Badge Typography
```tsx
// Consistent badge text styling
<Badge className="bg-red-500/20 text-red-300 border-red-500/30 mb-6 px-4 py-2">
  <Sparkles className="h-4 w-4 mr-2" />
  AI-Powered Solution
</Badge>
```

## Typography Guidelines

### Best Practices
1. **Hierarchy**: Use size and weight to establish clear information hierarchy
2. **Contrast**: Ensure sufficient contrast for all text/background combinations
3. **Consistency**: Maintain consistent font weights and sizes across similar elements
4. **Readability**: Use appropriate line heights and letter spacing
5. **Responsiveness**: Scale text appropriately across different screen sizes

### When to Override Defaults
The application uses default typography from `/styles/globals.css`. Only override when:
- Creating specific branded elements (hero text, special callouts)
- Implementing custom interactive elements (AI assistant input)
- Establishing visual hierarchy beyond standard patterns
- Meeting specific design requirements for emphasis

### Responsive Typography Strategy
```tsx
// Mobile-first responsive approach
className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"

// Breakpoint-specific adjustments
className="text-base md:text-lg lg:text-xl"
```

This ensures readable text across all device sizes while maintaining visual hierarchy and brand consistency.