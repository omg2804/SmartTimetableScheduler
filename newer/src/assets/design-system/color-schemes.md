# 🎨 Color Schemes & Palettes

## Overview
This document details the three distinct color schemes used throughout the AI-Powered Timetable Manager application.

## Primary Color Schemes

### 1. Black Upper Section (Landing Page Hero)
**Theme**: Dramatic black background with red/orange gradients

#### Background Colors
```css
/* Main background */
bg-black                    /* #000000 - Pure black base */

/* Gradient overlays */
bg-gradient-to-r from-red-500/30 to-orange-600/30     /* Floating orbs */
bg-gradient-to-r from-orange-500/25 to-red-600/25     /* Background elements */
bg-gradient-to-r from-red-600/20 to-orange-500/20     /* Subtle accents */
```

#### Text Colors
```css
/* Primary text */
text-white                  /* #ffffff - Main headings and content */
text-gray-300               /* Light gray for secondary text */

/* Accent text */
text-red-300                /* Red accents in badges */
text-orange-300/90          /* Orange for AI assistant labels */

/* Gradient text */
bg-gradient-to-r from-red-400 via-orange-400 to-red-600 bg-clip-text text-transparent
```

#### Interactive Elements
```css
/* Buttons */
bg-gradient-to-r from-red-500 to-orange-600           /* Primary CTAs */
hover:from-red-600 hover:to-orange-700                /* Hover states */

/* Borders and accents */
border-red-500/30           /* Badge borders */
border-white/20             /* Glass morphism borders */
```

### 2. Navy/Teal Professional Section (Landing Page Lower)
**Theme**: Professional navy blue to teal gradients with white content

#### Background Colors
```css
/* Main gradient */
bg-gradient-to-br from-blue-900 via-cyan-800 to-slate-800

/* Card backgrounds */
bg-gradient-to-br from-blue-600/90 to-blue-700/90     /* Card variant 1 */
bg-gradient-to-br from-teal-600/90 to-teal-700/90     /* Card variant 2 */
bg-gradient-to-br from-cyan-600/90 to-cyan-700/90     /* Card variant 3 */
bg-gradient-to-br from-slate-600/90 to-slate-700/90   /* Card variant 4 */
bg-gradient-to-br from-indigo-600/90 to-indigo-700/90 /* Card variant 5 */

/* Content sections */
bg-white/95                 /* Content areas with transparency */
bg-gradient-to-r from-slate-100 to-blue-50            /* Testimonials section */
```

#### Text Colors
```css
/* Primary text */
text-white                  /* Main headings */
text-slate-200              /* Body text on dark backgrounds */
text-slate-900              /* Text on light backgrounds */

/* Accent text */
text-teal-200               /* Feature accents */
text-cyan-200               /* Highlights */
text-teal-300 to-cyan-300   /* Gradient text highlights */

/* Card-specific text colors */
text-blue-200, text-teal-200, text-cyan-200, text-slate-200, text-indigo-200
```

#### Interactive Elements
```css
/* Badges */
bg-teal-500/20 text-teal-200 border-teal-400/30       /* Feature badges */
bg-cyan-500/20 text-cyan-700 border-cyan-300          /* Testimonial badges */

/* Card borders */
border-blue-400/30, border-teal-400/30, border-cyan-400/30
```

### 3. Dashboard Section (Gray/White with Red/Orange Accents)
**Theme**: Clean gray to white gradients with red/orange accent colors

#### Background Colors
```css
/* Main dashboard background */
bg-gradient-to-br from-gray-50 via-orange-50/30 to-red-50/20

/* Card backgrounds */
bg-white/90                 /* Primary cards with transparency */
backdrop-blur-sm            /* Glass morphism effect */

/* Status-specific backgrounds */
bg-green-50/50              /* Success states */
bg-orange-50/50             /* Warning states */
bg-red-50/50                /* Error states */
bg-purple-50/50             /* Special states */
```

#### Text Colors
```css
/* Primary text */
text-gray-900               /* Main headings and content */
text-gray-600               /* Secondary text */
text-gray-700               /* Body text */

/* Status colors */
text-green-600              /* Success indicators */
text-orange-600             /* Warning indicators */
text-red-600                /* Error indicators */
text-purple-600             /* Special indicators */
```

#### Interactive Elements
```css
/* Card borders */
border-red-200/50           /* Default card borders */
hover:border-red-300/70     /* Hover state borders */

/* Button accents */
text-red-600, text-orange-600               /* Icon colors */
bg-red-100 text-red-800 border-red-200     /* Badge variants */
bg-orange-100 text-orange-800 border-orange-200
```

## Special Effect Colors

### AI Assistant Glow Effects
```css
/* Multi-layer glow system */
/* Outermost glow */
bg-gradient-to-r from-orange-600/20 via-red-500/30 via-orange-500/25 to-red-600/20

/* Middle glow */
bg-gradient-to-r from-orange-500/30 via-red-500/40 to-orange-500/30

/* Inner glow */
bg-gradient-to-r from-orange-400/50 via-red-400/60 to-orange-400/50

/* Immediate border glow */
bg-gradient-to-r from-orange-300/40 to-red-300/40
```

### Loading Screen Effects
```css
/* Floating orb gradients */
bg-gradient-to-r from-red-500/40 to-orange-600/40     /* Primary orb */
bg-gradient-to-r from-orange-500/30 to-red-600/30     /* Secondary orb */
bg-gradient-to-r from-red-400/35 to-orange-500/35     /* Tertiary orb */

/* Logo effects */
bg-gradient-to-br from-red-500 to-orange-600          /* Main logo background */
bg-gradient-to-r from-red-500/30 to-orange-600/30     /* Pulsing halo */
```

## Color Usage Guidelines

### Semantic Color Mapping
```css
/* Status Colors */
.success { color: #16a34a; }      /* Green-600 */
.warning { color: #ea580c; }      /* Orange-600 */
.error { color: #dc2626; }        /* Red-600 */
.info { color: #0891b2; }         /* Cyan-600 */

/* Brand Colors */
.primary { color: #ef4444; }      /* Red-500 */
.secondary { color: #f97316; }    /* Orange-500 */
.accent { color: #0d9488; }       /* Teal-600 */
```

### Accessibility Compliance
All color combinations meet WCAG 2.1 AA standards:

```css
/* High contrast combinations */
white on black              /* 21:1 ratio */
text-gray-900 on white      /* 16.73:1 ratio */
text-white on red-600       /* 5.45:1 ratio */
text-white on teal-600      /* 4.78:1 ratio */
```

## Gradient Patterns

### Linear Gradients
```css
/* Horizontal gradients */
bg-gradient-to-r from-red-500 to-orange-600
bg-gradient-to-r from-blue-600 to-teal-600
bg-gradient-to-r from-teal-300 to-cyan-300

/* Diagonal gradients */
bg-gradient-to-br from-gray-50 via-orange-50/30 to-red-50/20
bg-gradient-to-br from-blue-900 via-cyan-800 to-slate-800
```

### Radial Effects
```css
/* Circular gradients for orbs */
radial-gradient(circle, from-red-500/30 to-transparent)
radial-gradient(circle, from-orange-400/50 to-transparent)
```

## Dark Mode Support

### CSS Custom Properties
```css
:root {
  --background: #ffffff;
  --foreground: oklch(0.145 0 0);
  --primary: #030213;
  --accent: #e9ebef;
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --accent: oklch(0.269 0 0);
}
```

### Implementation
- Automatic dark mode detection
- Smooth transitions between themes
- Consistent color relationships maintained
- All custom colors adapted for dark theme

## Brand Color Palette

### Primary Colors
- **Red**: #ef4444 (red-500) - Primary brand color
- **Orange**: #f97316 (orange-500) - Secondary brand color
- **Teal**: #0d9488 (teal-600) - Professional accent

### Neutral Colors
- **Black**: #000000 - Dramatic backgrounds
- **White**: #ffffff - Clean content areas
- **Gray-50**: #f9fafb - Light backgrounds
- **Gray-900**: #111827 - Dark text

### Status Colors
- **Success**: #16a34a (green-600)
- **Warning**: #ea580c (orange-600)
- **Error**: #dc2626 (red-600)
- **Info**: #0891b2 (cyan-600)