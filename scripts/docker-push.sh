#!/bin/bash

# Get version from package.json
VERSION=$(node -p "require('./frontend/package.json').version")

# Docker image names
DOCKER_USERNAME="andreusimus3"
IMAGE_NAME_FRONTEND="portfolio-frontend"
IMAGE_NAME_BACKEND="portfolio-backend"

echo "Building version: $VERSION"
echo "Frontend: $DOCKER_USERNAME/$IMAGE_NAME_FRONTEND:$VERSION"
echo "Backend: $DOCKER_USERNAME/$IMAGE_NAME_BACKEND:$VERSION"

# Build and tag with both version and latest
docker build -t $DOCKER_USERNAME/$IMAGE_NAME_FRONTEND:$VERSION \
             -t $DOCKER_USERNAME/$IMAGE_NAME_FRONTEND:latest .

docker build -t $DOCKER_USERNAME/$IMAGE_NAME_BACKEND:$VERSION \
             -t $DOCKER_USERNAME/$IMAGE_NAME_BACKEND:latest ./backend

# Push both version and latest tags
echo "Pushing frontend images..."
docker push $DOCKER_USERNAME/$IMAGE_NAME_FRONTEND:$VERSION
docker push $DOCKER_USERNAME/$IMAGE_NAME_FRONTEND:latest

echo "Pushing backend images..."
docker push $DOCKER_USERNAME/$IMAGE_NAME_BACKEND:$VERSION
docker push $DOCKER_USERNAME/$IMAGE_NAME_BACKEND:latest

echo "Successfully pushed all images" 