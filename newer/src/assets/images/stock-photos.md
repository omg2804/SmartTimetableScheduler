# 📷 Stock Photos (Unsplash)

## Overview
This document catalogs all stock photos used from Unsplash via the `unsplash_tool` and `ImageWithFallback` component.

## Stock Photos Used

### 1. Modern Classroom with Technology
- **URL**: `https://images.unsplash.com/photo-1543269664-76bc3997d9ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjBtb2Rlcm4lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NjgxNzUxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral`
- **Search Query**: "classroom modern technology"
- **Used In**: `/components/LandingPage.tsx`
- **Location**: Visual section (lower half of landing page)
- **Purpose**: Showcases modern educational environment
- **Component**: `ImageWithFallback`

## Implementation Example

```tsx
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

// Usage in component
<div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
  <ImageWithFallback
    src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjBtb2Rlcm4lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NjgxNzUxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="Modern classroom with technology"
    className="w-full h-full object-cover"
  />
</div>
```

## Design Context
- **Section**: Navy/teal gradient section of landing page
- **Theme**: Complements the professional blue/teal color scheme
- **Container**: 4:3 aspect ratio with rounded corners and white border
- **Animation**: Slides in from left with opacity transition

## Fallback Handling
- Uses `ImageWithFallback` component for error handling
- Provides graceful degradation if image fails to load
- Maintains layout integrity with proper aspect ratios

## Search Guidelines for Similar Images
When searching for additional educational stock photos:

### Recommended Keywords
- "classroom modern technology"
- "university lecture hall" 
- "students computers lab"
- "educational technology"
- "smart classroom"
- "digital learning environment"

### Quality Criteria
- **Resolution**: Minimum 1080px width
- **Quality**: High quality (q=80 parameter)
- **Format**: JPG optimized for web
- **Composition**: Professional, well-lit educational spaces
- **Style**: Modern, clean, technology-focused

## Notes
- All images should support the educational technology theme
- Maintain consistency with the navy/teal professional aesthetic
- Consider accessibility with proper alt text descriptions
- Images should load efficiently and have appropriate fallbacks