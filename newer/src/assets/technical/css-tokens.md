# 🎨 CSS Custom Properties & Tokens

## Overview
This document details all CSS custom properties (CSS variables) and design tokens used in the AI-Powered Timetable Manager application, as defined in `/styles/globals.css`.

## Root Variables

### Base Configuration
```css
:root {
  --font-size: 14px;                    /* Base font size for the application */
  --font-weight-medium: 500;            /* Medium font weight */
  --font-weight-normal: 400;            /* Normal font weight */
  --radius: 0.625rem;                   /* Base border radius (10px) */
}
```

### Color System (Light Mode)
```css
:root {
  /* Background Colors */
  --background: #ffffff;                /* Main page background */
  --foreground: oklch(0.145 0 0);      /* Primary text color */
  
  /* Card Colors */
  --card: #ffffff;                      /* Card background */
  --card-foreground: oklch(0.145 0 0); /* Card text color */
  
  /* Popover Colors */  
  --popover: oklch(1 0 0);             /* Popover background */
  --popover-foreground: oklch(0.145 0 0); /* Popover text */
  
  /* Brand Colors */
  --primary: #030213;                   /* Primary brand color */
  --primary-foreground: oklch(1 0 0);  /* Text on primary */
  
  /* Secondary Colors */
  --secondary: oklch(0.95 0.0058 264.53); /* Secondary background */
  --secondary-foreground: #030213;      /* Text on secondary */
  
  /* Muted Colors */
  --muted: #ececf0;                     /* Muted background */
  --muted-foreground: #717182;          /* Muted text */
  
  /* Accent Colors */
  --accent: #e9ebef;                    /* Accent background */
  --accent-foreground: #030213;         /* Text on accent */
  
  /* Status Colors */
  --destructive: #d4183d;               /* Error/destructive actions */
  --destructive-foreground: #ffffff;    /* Text on destructive */
  
  /* UI Element Colors */
  --border: rgba(0, 0, 0, 0.1);        /* Border color */
  --input: transparent;                 /* Input field background */
  --input-background: #f3f3f5;          /* Input background fallback */
  --switch-background: #cbced4;          /* Switch track background */
  --ring: oklch(0.708 0 0);             /* Focus ring color */
}
```

### Chart Colors
```css
:root {
  /* Chart Color Palette */
  --chart-1: oklch(0.646 0.222 41.116); /* Primary chart color */
  --chart-2: oklch(0.6 0.118 184.704);  /* Secondary chart color */
  --chart-3: oklch(0.398 0.07 227.392);  /* Tertiary chart color */
  --chart-4: oklch(0.828 0.189 84.429);  /* Quaternary chart color */
  --chart-5: oklch(0.769 0.188 70.08);   /* Quinary chart color */
}
```

### Sidebar System
```css
:root {
  /* Sidebar Colors */
  --sidebar: oklch(0.985 0 0);              /* Sidebar background */
  --sidebar-foreground: oklch(0.145 0 0);   /* Sidebar text */
  --sidebar-primary: #030213;               /* Sidebar primary elements */
  --sidebar-primary-foreground: oklch(0.985 0 0); /* Text on sidebar primary */
  --sidebar-accent: oklch(0.97 0 0);        /* Sidebar accent background */
  --sidebar-accent-foreground: oklch(0.205 0 0); /* Text on sidebar accent */
  --sidebar-border: oklch(0.922 0 0);       /* Sidebar borders */
  --sidebar-ring: oklch(0.708 0 0);         /* Sidebar focus rings */
}
```

## Dark Mode Variables

### Dark Theme Override
```css
.dark {
  /* Background Colors */
  --background: oklch(0.145 0 0);           /* Dark background */
  --foreground: oklch(0.985 0 0);           /* Light text on dark */
  
  /* Card Colors */
  --card: oklch(0.145 0 0);                 /* Dark card background */
  --card-foreground: oklch(0.985 0 0);      /* Light text on dark cards */
  
  /* Popover Colors */
  --popover: oklch(0.145 0 0);              /* Dark popover */
  --popover-foreground: oklch(0.985 0 0);   /* Light text in popovers */
  
  /* Brand Colors */
  --primary: oklch(0.985 0 0);              /* Light primary in dark mode */
  --primary-foreground: oklch(0.205 0 0);   /* Dark text on light primary */
  
  /* Secondary Colors */
  --secondary: oklch(0.269 0 0);            /* Dark secondary */
  --secondary-foreground: oklch(0.985 0 0); /* Light text on secondary */
  
  /* Muted Colors */
  --muted: oklch(0.269 0 0);                /* Dark muted background */
  --muted-foreground: oklch(0.708 0 0);     /* Muted text in dark mode */
  
  /* Accent Colors */
  --accent: oklch(0.269 0 0);               /* Dark accent */
  --accent-foreground: oklch(0.985 0 0);    /* Light text on accent */
  
  /* Status Colors */
  --destructive: oklch(0.396 0.141 25.723); /* Dark mode destructive */
  --destructive-foreground: oklch(0.637 0.237 25.331); /* Destructive text */
  
  /* UI Elements */
  --border: oklch(0.269 0 0);               /* Dark mode borders */
  --input: oklch(0.269 0 0);                /* Dark input background */
  --ring: oklch(0.439 0 0);                 /* Dark mode focus ring */
}
```

### Dark Mode Charts
```css
.dark {
  /* Dark Mode Chart Colors */
  --chart-1: oklch(0.488 0.243 264.376);   /* Blue-purple */
  --chart-2: oklch(0.696 0.17 162.48);     /* Teal-green */
  --chart-3: oklch(0.769 0.188 70.08);     /* Orange-yellow */
  --chart-4: oklch(0.627 0.265 303.9);     /* Purple-magenta */
  --chart-5: oklch(0.645 0.246 16.439);    /* Red-orange */
}
```

### Dark Mode Sidebar
```css
.dark {
  /* Dark Sidebar Colors */
  --sidebar: oklch(0.205 0 0);              /* Dark sidebar background */
  --sidebar-foreground: oklch(0.985 0 0);   /* Light sidebar text */
  --sidebar-primary: oklch(0.488 0.243 264.376); /* Blue primary in dark */
  --sidebar-primary-foreground: oklch(0.985 0 0); /* Light text on primary */
  --sidebar-accent: oklch(0.269 0 0);       /* Dark sidebar accent */
  --sidebar-accent-foreground: oklch(0.985 0 0); /* Light text on accent */
  --sidebar-border: oklch(0.269 0 0);       /* Dark sidebar borders */
  --sidebar-ring: oklch(0.439 0 0);         /* Dark sidebar focus rings */
}
```

## Tailwind Integration

### Theme Mapping
```css
@theme inline {
  /* Map CSS variables to Tailwind utilities */
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-input-background: var(--input-background);
  --color-switch-background: var(--switch-background);
  --color-ring: var(--ring);
  
  /* Chart colors */
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  
  /* Border radius scale */
  --radius-sm: calc(var(--radius) - 4px);  /* 6px */
  --radius-md: calc(var(--radius) - 2px);  /* 8px */
  --radius-lg: var(--radius);              /* 10px */
  --radius-xl: calc(var(--radius) + 4px);  /* 14px */
  
  /* Sidebar colors */
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}
```

## Base Layer Styles

### Global Resets
```css
@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  body {
    @apply bg-background text-foreground;
  }
}
```

### Typography System
```css
@layer base {
  :where(:not(:has([class*=" text-"]), :not(:has([class^="text-"])))) {
    h1 {
      font-size: var(--text-2xl);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    h2 {
      font-size: var(--text-xl);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    h3 {
      font-size: var(--text-lg);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    h4 {
      font-size: var(--text-base);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    p {
      font-size: var(--text-base);
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
  }
}
```

### Font Size Configuration
```css
html {
  font-size: var(--font-size); /* 14px base */
}
```

## Color Theory & OKLCH

### OKLCH Color Space Benefits
- **Perceptual uniformity**: Colors appear more consistent to human vision
- **Better gradients**: Smoother color transitions
- **Accessibility**: Improved contrast calculations
- **Future-proof**: Modern color space support

### OKLCH Format
```css
/* oklch(lightness chroma hue) */
oklch(0.708 0 0)           /* Neutral gray */
oklch(0.488 0.243 264.376) /* Saturated blue */
oklch(0.985 0 0)           /* Near white */
oklch(0.145 0 0)           /* Near black */
```

## Usage Examples

### Component Styling
```tsx
// Using CSS custom properties in components
<div className="bg-background text-foreground">
  <Card className="bg-card border-border">
    <Button className="bg-primary text-primary-foreground">
      Click me
    </Button>
  </Card>
</div>
```

### Custom CSS with Variables
```css
.custom-element {
  background: var(--background);
  color: var(--foreground);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}
```

### Dynamic Color Switching
```tsx
// Toggle between light and dark themes
<html className={isDark ? 'dark' : ''}>
  {/* All CSS variables automatically switch */}
</html>
```

## Design Token Categories

### Semantic Tokens
- **Background/Foreground**: Primary content colors
- **Card**: Container element colors
- **Primary/Secondary**: Brand and action colors
- **Muted/Accent**: Supporting element colors
- **Destructive**: Error and warning states

### Component Tokens
- **Input**: Form element styling
- **Border**: Element separation
- **Ring**: Focus state indication
- **Sidebar**: Navigation element styling

### System Tokens
- **Font weights**: Typography hierarchy
- **Border radius**: Consistent corner rounding
- **Chart colors**: Data visualization palette

## Maintenance Guidelines

### Adding New Tokens
1. Define in both light and dark modes
2. Map to Tailwind theme configuration
3. Document usage patterns
4. Test accessibility compliance

### Color Contrast Compliance
All token combinations maintain WCAG 2.1 AA standards:
- 4.5:1 minimum for normal text
- 3:1 minimum for large text
- Enhanced contrast for critical elements

### Token Naming Convention
```css
--{category}-{element}-{variant}: value;

/* Examples */
--color-background: value;      /* Semantic color */
--sidebar-primary: value;       /* Component color */
--font-weight-medium: value;    /* System property */
```