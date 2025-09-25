# Smart Timetable Scheduler

An AI-powered timetable management system built with React, Vite, and serverless functions.

## Features

- 🎯 **Smart Scheduling**: Advanced algorithm for optimal timetable generation
- 🎨 **Modern UI**: Beautiful, responsive interface built with React and Tailwind CSS
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds
- 🔧 **Easy Deployment**: Ready for Vercel deployment with serverless functions
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS
- **UI Components**: Radix UI primitives
- **Backend**: Vercel Serverless Functions (Node.js)
- **Deployment**: Vercel

## Local Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd SmartTimetableScheduler
```

2. Install dependencies:
```bash
npm run install:all
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment on Vercel

### Option 1: Deploy with Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

### Option 2: Deploy with GitHub Integration

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect the configuration and deploy

### Configuration

The project includes a `vercel.json` configuration file that handles:
- Frontend build process
- API routes for serverless functions
- Static file serving
- CORS configuration

## API Endpoints

- `POST /api/generate` - Generate timetable based on input data
- `GET /api/health` - Health check endpoint

## Project Structure

```
├── api/                    # Vercel serverless functions
│   ├── generate.js        # Timetable generation API
│   └── health.js          # Health check API
├── newer/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   └── ...
│   ├── package.json
│   └── vite.config.ts
├── vercel.json           # Vercel configuration
├── package.json          # Root package.json
└── README.md
```

## Environment Variables

No environment variables are required for basic functionality. The application uses default configurations.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

For support and questions, please open an issue on GitHub.
