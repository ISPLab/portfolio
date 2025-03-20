#!/bin/bash
# Install Railway CLI locally
npm i -g @railway/cli

# Login to Railway
railway login

# Create a new project (if you haven't already)
railway init

# Or link to existing project
railway link

# Get your token
railway login --browserless

# Copy the token and add it to GitHub secrets

# Determine which service to start based on SERVICE_TYPE env variable
if [ "$SERVICE_TYPE" = "frontend" ]; then
    echo "Starting frontend service..."
    npx serve dist
elif [ "$SERVICE_TYPE" = "backend" ]; then
    echo "Starting backend service..."
    cd backend && npm run start:prod
else
    echo "Error: SERVICE_TYPE must be either 'frontend' or 'backend'"
    exit 1
fi