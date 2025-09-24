# AI-Powered Timetable Manager

A modern, AI-powered timetable management system for educational institutions with role-based access control, built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **🤖 AI-Powered Scheduling**: Intelligent algorithms for optimal timetable generation
- **👥 Role-Based Access**: Admin, Principal, Teacher, and Student interfaces
- **🎨 Modern Design**: Beautiful UI with smooth animations and glass-morphism effects
- **📱 Responsive**: Works perfectly on desktop and mobile devices
- **⚡ Real-time Updates**: Instant notifications for schedule changes
- **🔍 Conflict Detection**: Automatic detection and resolution of scheduling conflicts
- **📊 Analytics Dashboard**: Comprehensive insights and reporting
- **✨ Smooth Animations**: Powered by Framer Motion for delightful interactions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-timetable-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔐 Demo Credentials

The application includes demo credentials for testing different user roles:

| Role | Username | Password |
|------|----------|----------|
| Admin | admin | admin123 |
| Principal | principal | principal123 |
| Teacher | teacher | teacher123 |
| Student | student | student123 |

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   ├── LandingPage.tsx  # Marketing landing page
│   ├── LoginPage.tsx    # Authentication page
│   ├── LoadingScreen.tsx # Loading animation
│   └── ...
├── lib/                 # Utility functions
├── styles/              # Global styles and themes
└── main.tsx            # Application entry point
```

## 🎯 User Roles & Permissions

### 👨‍💼 Administrator
- Full system access and management
- User management and system configuration
- Complete timetable oversight and modification

### 🎓 Principal
- Academic oversight and approval authority
- Department-level timetable management
- Faculty and resource allocation approval

### 👩‍🏫 Teacher
- View personal schedules and class assignments
- Submit schedule change requests
- Access to class and student information

### 👨‍🎓 Student
- View personal timetable and class schedules
- Access to academic calendar
- Course enrollment information

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Development**: Hot Module Replacement, TypeScript support

## 🎨 Design System

The application features a sophisticated design system with:

- **Color Schemes**: 
  - Dramatic black upper sections with red/orange gradients
  - Professional navy/teal themes for content sections
  - Clean gray/white with red/orange accents for dashboards

- **Typography**: Carefully crafted font hierarchy with custom weights
- **Animations**: Smooth transitions and micro-interactions
- **Components**: Consistent, accessible UI components

## 🔄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured experience with advanced interactions
- **Tablet**: Adapted layouts with touch-friendly controls
- **Mobile**: Streamlined interface optimized for small screens

## 🎭 Animations & Effects

- **Loading Screen**: 3.5-second animated loading with floating orbs
- **Landing Page**: Complex background animations with floating gradients
- **AI Assistant**: Multi-layer glow effects and glass-morphism
- **Page Transitions**: Smooth animations between different sections
- **Hover Effects**: Interactive feedback on all clickable elements

## 🧪 Development Notes

- The application uses mock data and authentication for demonstration
- All external API calls are simulated with loading states
- Images use placeholder content or local assets
- The AI assistant provides scripted responses for demo purposes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern educational software platforms
- **Icons**: Lucide React icon library
- **Animations**: Framer Motion animation library
- **UI Components**: Custom-built with Tailwind CSS

---

**Note**: This is a demonstration application showcasing modern web development practices and UI/UX design principles for educational timetable management systems.