# 🖼️ Figma Imported Assets

## Overview
This document catalogs all assets imported from Figma designs used in the AI-Powered Timetable Manager.

## Imported Images

### 1. AI Dashboard Interface Preview
- **Import Path**: `figma:asset/e64f181fe9dd762d80a3a20354c264ace4a150ae.png`
- **Variable Name**: `aiDashboardImage`
- **Used In**: `/components/LandingPage.tsx`
- **Location**: Hero section (right side)
- **Purpose**: Shows a preview of the AI dashboard interface to users
- **Styling**: 
  - Rounded corners (`rounded-xl`)
  - Drop shadow (`shadow-2xl`)
  - Responsive sizing (`w-full max-w-lg h-auto`)

## Implementation Example

```tsx
import aiDashboardImage from 'figma:asset/e64f181fe9dd762d80a3a20354c264ace4a150ae.png';

// Usage in component
<img
  src={aiDashboardImage}
  alt="AI Timetable Assistant Dashboard"
  className="w-full max-w-lg h-auto rounded-xl shadow-2xl"
/>
```

## Design Context
- **Section**: Black upper section of landing page
- **Theme**: Matches the dramatic black background with red/orange accents
- **Animation**: Scales in with opacity transition (0.8 to 1.0 scale)
- **Responsive**: Adapts to different screen sizes while maintaining aspect ratio

## Notes
- This is the primary visual asset showcasing the product interface
- Critical for user understanding of the dashboard functionality
- Should be kept up-to-date with actual dashboard design changes