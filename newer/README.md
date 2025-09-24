# Academic Timetable Management System MVP

A comprehensive timetable management system with UG+PG support, biweekly switching, and embeddable functionality.

## Features

### ✅ Core Features
- **Minimal Timetable Generation**: Generate timetables with AI-powered optimization
- **UG + PG Support**: Separate handling for undergraduate and postgraduate programs
- **Biweekly Switching**: Toggle between odd and even weeks for alternating schedules
- **Upcoming Quizzes**: Track and display upcoming quizzes, midterms, and finals
- **Elective Courses**: Manage elective course enrollments and schedules
- **Work Tracking**: Monitor assignments, projects, presentations, and reports

### ✅ Advanced Features
- **Embeddable**: Embed the timetable in any website or subdomain using iframe
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Filtering**: Filter by program, batch, faculty, and room
- **Interactive UI**: Modern, intuitive interface with smooth animations
- **Export Options**: Export timetables as PDF or Excel files

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd SIHproject
   ```

2. **Install dependencies**
   ```bash
   cd newer
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Start the backend server** (in a separate terminal)
   ```bash
   cd backend
   npm install
   node server.js
   ```

5. **Access the application**
   - Main application: http://localhost:5173
   - Embeddable version: http://localhost:8000/embed

## Usage

### Generating Timetables

1. Click "Generate Timetable" button
2. Follow the 8-step wizard:
   - Select your college
   - Choose degree program (UG/PG)
   - Set number of branches
   - Configure academic years
   - Add courses/subjects
   - Set number of batches
   - Add laboratory sessions (optional)
   - Add faculty information

3. The system will generate an optimized timetable

### Using Biweekly Switching

- Toggle the "Odd Week" / "Even Week" switch to view alternating schedules
- Courses marked as "both" appear every week
- Courses marked as "odd" appear only on odd weeks (1, 3, 5...)
- Courses marked as "even" appear only on even weeks (2, 4, 6...)

### Embedding in Websites

1. Click the "Embed" button in the main application
2. Copy the provided iframe code
3. Paste it into your website's HTML

```html
<iframe 
  src="http://localhost:8000/embed" 
  width="100%" 
  height="600px" 
  frameborder="0">
</iframe>
```

## Project Structure

```
newer/
├── src/
│   ├── components/
│   │   ├── TimetableGrid.tsx          # Main timetable component
│   │   ├── EmbeddableTimetable.tsx    # Embeddable version
│   │   ├── TimetableGenerator.tsx     # Generation wizard
│   │   └── ui/                        # UI components
│   ├── App.tsx                        # Main application
│   └── main.tsx                       # Entry point
├── backend/
│   └── server.js                      # Express backend
└── package.json                       # Dependencies
```

## API Endpoints

- `POST /generate` - Generate timetable
- `GET /embed` - Embeddable timetable page
- `GET /health` - Health check

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express
- **UI Components**: Radix UI, Lucide React
- **Build Tool**: Vite

## Development

### Adding New Features

1. Create components in `src/components/`
2. Update the main `TimetableGrid.tsx` for new functionality
3. Modify `EmbeddableTimetable.tsx` for embed version
4. Update backend in `backend/server.js` if needed

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## Deployment

### For Web Hosting
1. Build the project: `npm run build`
2. Upload the `dist/` folder to your web server
3. Configure your server to serve the backend on port 8000

### For Subdomain Deployment
1. Deploy the built application to your subdomain
2. Update the embed URL in the iframe code
3. Ensure CORS is properly configured

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the development team or create an issue in the repository.