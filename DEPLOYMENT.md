# Deployment Guide

## Vercel Deployment

This project is configured for easy deployment on Vercel. Follow these steps:

### 1. Prerequisites

- Vercel account (free tier available)
- GitHub repository with your code
- Node.js 18+ (for local testing)

### 2. Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect the configuration from `vercel.json`
5. Click "Deploy"

### 3. Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (run from project root)
vercel

# For production deployment
vercel --prod
```

### 4. Configuration Details

The `vercel.json` file configures:

- **Build Command**: `cd newer && npm run build`
- **Output Directory**: `newer/build`
- **API Routes**: Serverless functions in `/api` directory
- **Static Files**: Served from the build directory

### 5. Environment Variables

No environment variables are required for basic functionality. The application uses:
- Default API endpoints
- Built-in CORS configuration
- Optimized build settings

### 6. Custom Domain (Optional)

1. Go to your project settings in Vercel dashboard
2. Navigate to "Domains"
3. Add your custom domain
4. Configure DNS settings as instructed

### 7. Monitoring

- View deployment logs in Vercel dashboard
- Monitor API function performance
- Check build logs for any issues

## Troubleshooting

### Build Issues

If the build fails:
1. Check that all dependencies are installed
2. Verify Node.js version (18+)
3. Check the build logs in Vercel dashboard

### API Issues

If API calls fail:
1. Verify the API routes are correctly configured
2. Check CORS settings
3. Test endpoints individually

### Performance

For better performance:
1. Enable Vercel's edge caching
2. Optimize images and assets
3. Use Vercel's analytics for insights

## Local Testing

Test the production build locally:

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

## Support

For deployment issues:
1. Check Vercel documentation
2. Review build logs
3. Open an issue on GitHub
