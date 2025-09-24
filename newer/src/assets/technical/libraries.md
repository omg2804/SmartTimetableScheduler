# 📚 External Libraries & Dependencies

## Overview
This document catalogs all external libraries and dependencies used in the AI-Powered Timetable Manager application.

## Core Framework & Runtime

### React Ecosystem
- **`react`** - Core React library for component-based UI
- **`react-dom`** - React DOM rendering
- **`@types/react`** - TypeScript definitions for React
- **`@types/react-dom`** - TypeScript definitions for React DOM

### TypeScript
- **`typescript`** - Static type checking and enhanced developer experience
- Configuration in `tsconfig.json` for strict type checking

## Animation & Motion

### Motion/React (Framer Motion)
- **`motion/react`** - Advanced animation library for React
- **Import syntax**: `import { motion } from 'motion/react'`
- **Key features used**:
  - Page transitions and entry animations
  - Complex multi-axis movements
  - Hover and tap interactions
  - Infinite loop animations
  - Spring physics simulations

#### Usage Examples
```tsx
// Basic motion component
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>

// Complex animations
<motion.div
  animate={{ 
    x: [0, 100, 0],
    rotate: [0, 180, 360]
  }}
  transition={{ 
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
```

## UI Component Libraries

### ShadCN UI
- **Location**: `/components/ui/`
- **Components**: 30+ pre-built accessible components
- **Styling**: Tailwind CSS based with CSS custom properties
- **Key components**:
  - `Button`, `Card`, `Badge`, `Input`
  - `ScrollArea`, `Dialog`, `Select`, `Table`
  - `Alert`, `Progress`, `Tooltip`, `Dropdown`

### Lucide React
- **`lucide-react`** - Feather-inspired icon library
- **Icons used**: 25+ icons throughout the application
- **Import example**: `import { Brain, Calendar, Users } from "lucide-react"`
- **Benefits**: Consistent design, tree-shakable, TypeScript support

## Styling & CSS

### Tailwind CSS
- **Version**: Tailwind v4.0
- **Configuration**: CSS-based configuration in `/styles/globals.css`
- **Features used**:
  - Utility-first CSS framework
  - Custom CSS variables integration
  - Dark mode support
  - Responsive design utilities
  - Custom gradients and effects

#### Custom Properties Integration
```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  /* ... additional custom properties */
}
```

## Image & Media Handling

### ImageWithFallback Component
- **Location**: `/components/figma/ImageWithFallback.tsx`
- **Purpose**: Graceful image loading with fallback support
- **Protected**: System component, not to be modified

### Unsplash Integration
- **`unsplash_tool`** - Used for fetching stock photography
- **Image optimization**: URL parameters for size, quality, format
- **Accessibility**: Proper alt text and responsive sizing

## Form Handling (Available)

### React Hook Form
- **`react-hook-form@7.55.0`** - Specific version required
- **Status**: Available but not actively used in current implementation
- **Future use**: Form validation in timetable generation workflow

## Development & Build Tools

### Bundling
- Modern JavaScript bundler (Vite/Next.js implied from usage patterns)
- TypeScript compilation
- CSS processing with Tailwind
- Asset optimization

### Code Quality
- TypeScript strict mode enabled
- ESLint configuration (implied)
- Prettier formatting (implied)

## Available But Unused Libraries

### Charts & Visualization
- **`recharts`** - Recommended for charts and graphs
- **Status**: Available for future analytics features

### Enhanced Interactions
- **`react-slick`** - For carousel functionality
- **`react-responsive-masonry`** - For masonry grid layouts
- **`react-dnd`** - For drag and drop interactions
- **`re-resizable`** - For resizable components (note: not `react-resizable`)

### Animation Alternatives
- **Canvas-based drawing**: Direct canvas manipulation (Konva not supported)
- **Popper.js React**: For advanced positioning and popovers

## Library Integration Patterns

### Import Strategies
```tsx
// Standard imports
import { motion } from 'motion/react';
import { Button } from './components/ui/button';
import { Brain, Calendar } from 'lucide-react';

// Versioned imports (when required)
import { useForm } from 'react-hook-form@7.55.0';

// Asset imports
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import imageAsset from 'figma:asset/[hash].png';
```

### Component Integration
```tsx
// Combining multiple libraries
<motion.div whileHover={{ scale: 1.05 }}>
  <Button className="bg-gradient-to-r from-red-500 to-orange-600">
    <Calendar className="h-4 w-4 mr-2" />
    Schedule Meeting
  </Button>
</motion.div>
```

## Performance Optimizations

### Bundle Size Management
- Tree-shaking enabled for unused code elimination
- Lazy loading for non-critical components
- Icon optimization through selective imports

### Runtime Performance
- Motion animations using GPU acceleration
- Efficient re-rendering with React.memo
- Optimized image loading with ImageWithFallback

## Development Experience

### TypeScript Integration
- Full type safety across all libraries
- Auto-completion and IntelliSense support
- Compile-time error detection

### Hot Module Replacement
- Fast development iteration
- Preserved component state during development
- Instant style updates

## Future Library Considerations

### Planned Additions
Based on application roadmap:

1. **`@tanstack/react-query`** - For server state management
2. **`date-fns`** - For date manipulation in timetables
3. **`react-pdf`** - For PDF export functionality
4. **`socket.io-client`** - For real-time collaboration
5. **`react-virtualized`** - For large dataset rendering

### Authentication & Security
1. **`@supabase/supabase-js`** - For backend integration
2. **`bcryptjs`** - For password hashing (if needed)
3. **`jsonwebtoken`** - For JWT token handling

### Testing Libraries
1. **`@testing-library/react`** - Component testing
2. **`jest`** - Test runner and assertions
3. **`@testing-library/user-event`** - User interaction testing

## Library Update Strategy

### Version Management
- Specific versions pinned for critical dependencies
- Regular security updates scheduled
- Breaking change migration plans

### Compatibility Matrix
```json
{
  "react": "^18.0.0",
  "motion/react": "latest",
  "lucide-react": "latest",
  "react-hook-form": "7.55.0"
}
```

### Migration Paths
- Gradual adoption of new library versions
- Backward compatibility maintenance
- Feature flag based rollouts

## Best Practices

### Import Organization
```tsx
// External libraries first
import { motion } from 'motion/react';
import { Button } from './components/ui/button';
import { Calendar } from 'lucide-react';

// Internal components second
import { CustomComponent } from './components/CustomComponent';

// Assets last
import image from 'figma:asset/image.png';
```

### Library Selection Criteria
1. **Bundle size impact**: Minimal addition to build size
2. **TypeScript support**: Full type definitions available
3. **Maintenance status**: Active development and security updates
4. **Community adoption**: Strong ecosystem and documentation
5. **Performance**: Efficient runtime characteristics
6. **Accessibility**: WCAG compliance and screen reader support