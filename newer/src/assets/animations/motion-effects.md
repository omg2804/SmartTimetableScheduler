# ✨ Motion/React Animation Effects

## Overview
This document catalogs all Motion/React (formerly Framer Motion) animations used throughout the AI-Powered Timetable Manager application.

## Animation Categories

### 1. Page Transitions & Entry Animations

#### Landing Page Entry
```tsx
// Main page fade-in
<motion.div 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.2 }}
/>

// Header slide-down
<motion.header 
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
/>

// Content slide-in from left
<motion.div
  initial={{ opacity: 0, x: -80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, delay: 0.5 }}
/>
```

#### Staggered Content Animations
```tsx
// Feature cards with staggered delays
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
  viewport={{ once: true }}
/>
```

### 2. Loading Screen Animations

#### Floating Gradient Orbs
```tsx
// Complex multi-axis movement
<motion.div
  initial={{ opacity: 0, scale: 0, x: -100 }}
  animate={{ 
    opacity: 1, 
    scale: 1, 
    x: 0,
    y: [0, -30, 0],
    rotate: [0, 180, 360]
  }}
  transition={{ 
    opacity: { duration: 1.5, delay: 0.5 },
    scale: { duration: 1.5, delay: 0.5 },
    x: { duration: 1.5, delay: 0.5 },
    y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 },
    rotate: { duration: 20, repeat: Infinity, ease: "linear", delay: 2 }
  }}
/>
```

#### Pulsing Logo Effect
```tsx
// Brain icon with rotation and backdrop pulse
<motion.div
  animate={{ rotate: [0, 360] }}
  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
>
  <Brain className="h-12 w-12 text-white" />
</motion.div>

// Background pulse
<motion.div
  animate={{ 
    scale: [1, 1.1, 1],
    opacity: [0.7, 1, 0.7]
  }}
  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-orange-600/30 rounded-2xl blur-xl"
/>
```

### 3. AI Assistant Animations

#### Multi-Layer Glow Input
```tsx
// Outermost glow - Large, soft orange/red gradient
<div className="absolute -inset-8 bg-gradient-to-r from-orange-600/20 via-red-500/30 via-orange-500/25 to-red-600/20 rounded-full blur-3xl opacity-90"></div>

// Middle glow - Medium intensity
<div className="absolute -inset-6 bg-gradient-to-r from-orange-500/30 via-red-500/40 to-orange-500/30 rounded-full blur-2xl opacity-95"></div>

// Inner glow - Tight, bright orange
<div className="absolute -inset-3 bg-gradient-to-r from-orange-400/50 via-red-400/60 to-orange-400/50 rounded-full blur-xl opacity-100"></div>
```

#### Floating Button with Pulsing Ring
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
```

#### Typing Indicator
```tsx
// Animated dots
<motion.div
  className="w-2 h-2 bg-orange-400 rounded-full"
  animate={{ scale: [1, 1.2, 1] }}
  transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
/>
```

### 4. Interactive Hover Effects

#### Button Hover Animations
```tsx
// Scale and shadow on hover
<motion.div
  whileHover={{ 
    scale: 1.05,
    boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)"
  }}
  whileTap={{ scale: 0.95 }}
>
  <Button>Start Free Trial</Button>
</motion.div>
```

#### Card Hover Effects
```tsx
// Lift and scale effect
<motion.div
  whileHover={{ y: -8, scale: 1.03 }}
  transition={{ duration: 0.3 }}
>
  <Card>...</Card>
</motion.div>
```

### 5. Background Animated Elements

#### Floating Gradient Orbs (Landing Page)
```tsx
// Large orb with complex motion
<motion.div
  initial={{ opacity: 0, scale: 0, x: -100 }}
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
  className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-red-500/30 to-orange-600/30 rounded-full blur-2xl"
/>
```

#### Sparkle Effects
```tsx
// Blinking sparkles
<motion.div
  initial={{ opacity: 0 }}
  animate={{ 
    opacity: [0, 1, 0],
    scale: [0.5, 1.2, 0.5]
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    delay: 2,
    ease: "easeInOut"
  }}
  className="absolute top-1/3 left-1/2 w-4 h-4 bg-white rounded-full"
/>
```

### 6. Icon Animations

#### Rotating Icons
```tsx
// Sparkles with continuous rotation
<motion.div
  animate={{ rotate: [0, 360] }}
  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
>
  <Sparkles className="h-4 w-4 mr-2" />
</motion.div>
```

#### Breathing/Pulsing Icons
```tsx
// Scale breathing effect
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
```

### 7. Loading Progress Animations

#### Progress Bar
```tsx
// Width expansion
<motion.div
  initial={{ opacity: 0, width: 0 }}
  animate={{ opacity: 1, width: "100%" }}
  transition={{ duration: 3.5, ease: "easeInOut", delay: 0.5 }}
  className="w-48 h-1 bg-gray-700 rounded-full overflow-hidden"
>
  // Sliding progress fill
  <motion.div
    initial={{ x: "-100%" }}
    animate={{ x: "100%" }}
    transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
    className="h-full bg-gradient-to-r from-red-500 to-orange-600 rounded-full"
  />
</motion.div>
```

## Animation Timing Patterns

### Entry Sequences
- **Initial delay**: 0.2-0.5s for staggered entries
- **Duration**: 0.6-1.2s for smooth, not rushed feel
- **Stagger increment**: 0.1-0.2s between similar elements

### Infinite Animations
- **Rotation**: 3-20s for different speed effects
- **Floating**: 4-8s for natural movement
- **Pulsing**: 1.5-2.5s for breathing effects
- **Sparkles**: 2-3s for magical effects

### Interactive Animations
- **Hover**: 0.2-0.3s for responsive feel
- **Tap**: 0.1-0.2s for immediate feedback
- **Entry/Exit**: 0.5-0.8s for smooth transitions

## Performance Considerations

### Optimization Strategies
1. **will-change CSS property** for frequently animated elements
2. **Transform-based animations** for GPU acceleration
3. **Viewport-based animations** to avoid unnecessary renders
4. **Reduced motion respect** for accessibility

### Best Practices
```tsx
// Viewport-based animations for performance
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}  // Only animate once
  transition={{ duration: 0.6 }}
/>

// Prefer transforms over position changes
animate={{ x: 20 }}  // ✅ Good - uses transform
animate={{ left: 20 }}  // ❌ Avoid - causes layout
```

## Accessibility Features

### Reduced Motion Support
```tsx
// Conditional animations based on user preference
const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

<motion.div
  animate={shouldReduceMotion ? {} : { rotate: [0, 360] }}
  transition={shouldReduceMotion ? {} : { duration: 3, repeat: Infinity }}
/>
```

### Focus Management
- Animations don't interfere with keyboard navigation
- Important content remains accessible during animations
- Loading states provide appropriate ARIA labels