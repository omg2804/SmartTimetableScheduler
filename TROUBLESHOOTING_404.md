# Troubleshooting 404 Error

## The 404 Error You're Seeing

The error `404: NOT_FOUND` with code `NOT_FOUND` typically means Vercel can't find the expected files or the routing is incorrect.

## Quick Fixes to Try

### 1. Use the Simple Configuration

Replace your current `vercel.json` with the simpler version:

```bash
# Rename current config
mv vercel.json vercel-complex.json

# Use simple config
mv vercel-simple.json vercel.json
```

### 2. Check Your Deployment Settings

In Vercel Dashboard:
1. Go to your project settings
2. Check "Root Directory" - should be empty (not set to `newer`)
3. Check "Build Command" - should be `cd newer && npm run build`
4. Check "Output Directory" - should be `newer/build`

### 3. Test API Endpoints Separately

Test if your API is working:
```bash
# Test health endpoint
curl https://your-project.vercel.app/api/health

# Test generate endpoint
curl -X POST https://your-project.vercel.app/api/generate \
  -H "Content-Type: application/json" \
  -d '{"courses":["Math"],"teachers":[{"name":"John"}],"batches":1,"labs":[]}'
```

### 4. Check Build Logs

In Vercel Dashboard:
1. Go to your project
2. Click on the latest deployment
3. Check the build logs for errors
4. Look for any missing dependencies or build failures

### 5. Alternative: Deploy Frontend Only First

If the full deployment is failing, try deploying just the frontend:

1. Create a new Vercel project
2. Set Root Directory to `newer`
3. Use Framework Preset: "Vite"
4. Deploy just the frontend first
5. Then add the API functions later

## Common Causes of 404 Errors

1. **Wrong Root Directory**: Vercel looking in wrong folder
2. **Build Failure**: Frontend not building correctly
3. **Routing Issues**: Incorrect route configuration
4. **Missing Files**: Expected files not in build output
5. **API Function Issues**: Serverless functions not deploying

## Step-by-Step Debug Process

1. **Check if build succeeded**:
   - Look at Vercel build logs
   - Ensure no build errors

2. **Verify file structure**:
   - Check if `newer/build` directory exists
   - Verify `index.html` is in the build output

3. **Test API functions**:
   - Check if `/api/health` works
   - Test with simple curl commands

4. **Check routing**:
   - Verify `vercel.json` routes are correct
   - Test different URL paths

## If Nothing Works

Try the **Two Separate Projects** approach:

1. **Frontend Project**:
   - Root Directory: `newer`
   - Framework: Vite
   - No API functions

2. **Backend Project**:
   - Root Directory: `.` (root)
   - Just the `/api` folder
   - No frontend build

This approach is more reliable and easier to debug.
