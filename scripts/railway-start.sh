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