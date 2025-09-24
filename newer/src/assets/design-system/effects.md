# ✨ Special Visual Effects

## Overview
This document catalogs all special visual effects used throughout the AI-Powered Timetable Manager application, including glassmorphism, glow effects, shadows, and blur techniques.

## Effect Categories

### 1. Glassmorphism Effects

#### Backdrop Blur Implementation
```css
/* Standard glassmorphism pattern */
backdrop-blur-sm                /* Light blur effect */
backdrop-blur-md                /* Medium blur effect */
backdrop-blur-xl                /* Strong blur effect */

/* Combined with transparency */
bg-white/90 backdrop-blur-sm    /* Semi-transparent white with blur */
bg-gray-950/98 backdrop-blur-xl /* Nearly opaque dark with strong blur */
```

#### Usage Examples
```tsx
// AI Assistant background
<div className="absolute inset-0 bg-gray-950/98 backdrop-blur-xl rounded-2xl border border-orange-500/15 shadow-2xl">

// Landing page cards
<div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">

// Dashboard cards
<Card className="bg-white/90 backdrop-blur-sm border-red-200/50 shadow-lg">
```

### 2. Glow Effects

#### Multi-Layer Glow System (AI Assistant Input)
```tsx
// Four-layer glow effect for maximum impact
// Layer 1: Outermost glow - Large, soft
<div className="absolute -inset-8 bg-gradient-to-r from-orange-600/20 via-red-500/30 via-orange-500/25 to-red-600/20 rounded-full blur-3xl opacity-90"></div>

// Layer 2: Middle glow - Medium intensity  
<div className="absolute -inset-6 bg-gradient-to-r from-orange-500/30 via-red-500/40 to-orange-500/30 rounded-full blur-2xl opacity-95"></div>

// Layer 3: Inner glow - Tight, bright
<div className="absolute -inset-3 bg-gradient-to-r from-orange-400/50 via-red-400/60 to-orange-400/50 rounded-full blur-xl opacity-100"></div>

// Layer 4: Immediate border glow
<div className="absolute -inset-1 bg-gradient-to-r from-orange-300/40 to-red-300/40 rounded-full blur-sm opacity-80"></div>
```

#### Button Glow Effects
```tsx
// Pulsing ring effect
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

// Static button glow
<div className="absolute -inset-1 bg-gradient-to-r from-orange-400/60 to-red-500/60 rounded-full blur-md opacity-70"></div>
```

#### Logo Glow Effects
```tsx
// Pulsing halo around logo
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
```

### 3. Shadow Effects

#### Shadow Hierarchy
```css
/* Light shadows */
shadow-sm                       /* Subtle elevation */
shadow-md                       /* Medium elevation */
shadow-lg                       /* Card elevation */

/* Strong shadows */
shadow-xl                       /* High elevation */
shadow-2xl                      /* Maximum elevation */

/* Colored shadows */
shadow-xl                       /* Standard shadow */
box-shadow: "0 20px 40px rgba(239, 68, 68, 0.3)"  /* Custom red shadow */
```

#### Usage Patterns
```tsx
// Card shadows with hover effects
<Card className="shadow-lg hover:shadow-xl transition-all duration-300">

// Hero image shadow
<img className="rounded-xl shadow-2xl" />

// Button shadows with interaction
<motion.div
  whileHover={{ 
    scale: 1.05,
    boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)"
  }}
>
```

### 4. Blur Techniques

#### Blur Intensity Scale
```css
blur-sm                         /* 4px blur */
blur-md                         /* 6px blur */
blur-lg                         /* 10px blur */
blur-xl                         /* 15px blur */
blur-2xl                        /* 25px blur */
blur-3xl                        /* 50px blur */
```

#### Background Orb Blurs
```tsx
// Loading screen floating orbs
<div className="w-32 h-32 bg-gradient-to-r from-red-500/40 to-orange-600/40 rounded-full blur-xl" />

<div className="w-24 h-24 bg-gradient-to-r from-orange-500/30 to-red-600/30 rounded-full blur-lg" />

// Landing page background elements
<div className="w-40 h-40 bg-gradient-to-r from-red-500/30 to-orange-600/30 rounded-full blur-2xl" />

<div className="w-64 h-64 bg-gradient-to-r from-orange-500/25 to-red-600/25 rounded-full blur-3xl" />
```

### 5. Border Effects

#### Gradient Borders
```tsx
// Subtle gradient borders
border border-orange-500/15     /* AI assistant */
border border-red-200/50        /* Dashboard cards */
border border-white/20          /* Glassmorphism elements */

// Enhanced borders on hover
hover:border-red-300/70         /* Interactive feedback */
hover:border-orange-400/60      /* Button hover states */
```

#### Multi-Border Effects
```tsx
// AI assistant send button
className="border border-orange-300/20"  /* Base border */
// Combined with inner shadow and glow effects
```

### 6. Sparkle and Particle Effects

#### Animated Sparkles
```tsx
// Floating sparkle points
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

// Different sized sparkles with varied timing
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
```

### 7. Transition Effects

#### Smooth Transitions
```css
/* Standard transition timing */
transition-all duration-300     /* General hover effects */
transition-all duration-200     /* Quick interactions */
transition-colors              /* Color-only transitions */

/* Custom transition curves */
transition: { 
  type: "spring",
  stiffness: 300,
  damping: 25,
  duration: 0.6
}
```

#### Hover Transformations
```tsx
// Card lift effect
<motion.div
  whileHover={{ y: -8, scale: 1.03 }}
  transition={{ duration: 0.3 }}
>

// Button press effect
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
```

### 8. Loading and Progress Effects

#### Progress Bar Animation
```tsx
// Smooth width expansion
<motion.div
  initial={{ opacity: 0, width: 0 }}
  animate={{ opacity: 1, width: "100%" }}
  transition={{ duration: 3.5, ease: "easeInOut", delay: 0.5 }}
  className="w-48 h-1 bg-gray-700 rounded-full overflow-hidden"
>
  // Sliding fill effect
  <motion.div
    initial={{ x: "-100%" }}
    animate={{ x: "100%" }}
    transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
    className="h-full bg-gradient-to-r from-red-500 to-orange-600 rounded-full"
  />
</motion.div>
```

#### Pulsing Indicators
```tsx
// Breathing animation for status indicators
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
  className="w-5 h-5 bg-green-400 rounded-full"
/>
```

### 9. SVG Transition Effects

#### Curved Section Transitions
```tsx
// Smooth curved transition between sections
<svg className="w-full h-32 md:h-40" viewBox="0 0 1200 200" preserveAspectRatio="none">
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
```

## Performance Optimization

### GPU Acceleration
```css
/* Properties that trigger GPU acceleration */
transform: translateZ(0);       /* Force GPU layer */
will-change: transform;         /* Hint to browser */
backface-visibility: hidden;    /* Optimize 3D transforms */
```

### Efficient Animation Properties
```tsx
// Prefer transform-based animations
animate={{ x: 20, y: 10, scale: 1.1 }}  // ✅ GPU accelerated
animate={{ left: 20, top: 10 }}          // ❌ CPU intensive

// Use transforms for better performance
transform: 'translateX(20px) scale(1.1)' // ✅ Single composite operation
```

### Conditional Effects
```tsx
// Reduce effects on mobile or low-power devices
const shouldUseEffects = window.innerWidth > 768 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

<motion.div
  animate={shouldUseEffects ? complexAnimation : simpleAnimation}
>
```

## Accessibility Considerations

### Respecting User Preferences
```tsx
// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

<motion.div
  animate={prefersReducedMotion ? {} : { rotate: [0, 360] }}
  transition={prefersReducedMotion ? {} : { duration: 3, repeat: Infinity }}
/>
```

### Color Contrast Maintenance
- All glow effects maintain readable text contrast
- Background blur doesn't interfere with content legibility
- Interactive elements remain clearly identifiable

### Focus Management
- Effects don't interfere with keyboard navigation
- Focus indicators remain visible through all animations
- Important content isn't obscured by decorative effects