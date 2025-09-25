# Separate Frontend and Backend Deployment

## Option 1: Single Repository, Two Vercel Projects

### Frontend Deployment

1. **Create Frontend Project in Vercel:**
   - Go to Vercel Dashboard
   - Click "New Project"
   - Import your repository
   - **Important**: Set the "Root Directory" to `newer`
   - Use `vercel-frontend.json` as the configuration file

2. **Frontend Configuration:**
   - Root Directory: `newer`
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Framework Preset: Vite

### Backend Deployment

1. **Create Backend Project in Vercel:**
   - Go to Vercel Dashboard
   - Click "New Project"
   - Import the same repository
   - **Important**: Set the "Root Directory" to `.` (root)
   - Use `vercel-backend.json` as the configuration file

2. **Backend Configuration:**
   - Root Directory: `.` (root)
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
   - Framework Preset: Other

### Update Frontend API URLs

After deploying both, update the frontend to use the backend URL:

```typescript
// In newer/src/components/TimetableGenerator.tsx and TimetableGrid.tsx
const response = await fetch("https://your-backend-project.vercel.app/api/generate", {
```

## Option 2: Two Separate Repositories

### Frontend Repository

1. **Create new repository** for frontend only
2. **Copy frontend files:**
   ```bash
   # Create new repo
   mkdir timetable-frontend
   cd timetable-frontend
   
   # Copy frontend files
   cp -r ../SmartTimetableScheduler/newer/* .
   cp ../SmartTimetableScheduler/vercel-frontend.json ./vercel.json
   ```

3. **Deploy to Vercel:**
   - Connect the frontend repository
   - Vercel will auto-detect Vite configuration

### Backend Repository

1. **Create new repository** for backend only
2. **Copy backend files:**
   ```bash
   # Create new repo
   mkdir timetable-backend
   cd timetable-backend
   
   # Copy backend files
   cp -r ../SmartTimetableScheduler/api .
   cp ../SmartTimetableScheduler/vercel-backend.json ./vercel.json
   cp ../SmartTimetableScheduler/package.json .
   ```

3. **Deploy to Vercel:**
   - Connect the backend repository
   - Vercel will auto-detect serverless functions

## Option 3: Monorepo with Workspaces (Recommended)

### Update Root Package.json

```json
{
  "name": "smart-timetable-scheduler",
  "version": "1.0.0",
  "private": true,
  "workspaces": [
    "newer",
    "api"
  ],
  "scripts": {
    "dev": "cd newer && npm run dev",
    "build": "cd newer && npm run build",
    "install:all": "npm install && cd newer && npm install"
  }
}
```

### Deploy with Correct Configuration

Use the updated `vercel.json` (which I just fixed) that properly handles the monorepo structure.

## Recommended Approach

I recommend **Option 1** (Single Repository, Two Vercel Projects) because:

1. ✅ Keeps everything in one repository
2. ✅ Allows independent deployments
3. ✅ Easier to manage
4. ✅ No need to split repositories

## Quick Fix for Current Issue

The current `vercel.json` should now work correctly. The key changes:

1. ✅ Uses `@vercel/static-build` for frontend
2. ✅ Points to `newer/package.json` for frontend build
3. ✅ Properly routes to `newer/build/` directory
4. ✅ Separates frontend and backend builds

Try deploying again with the updated configuration!
