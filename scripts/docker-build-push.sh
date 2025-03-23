#!/bin/bash

# Get version from package.json
VERSION=$(node -p "require('./frontend/package.json').version")

# Docker image names
DOCKER_USERNAME="andreusimus3"
IMAGE_NAME_FRONTEND="portfolio-frontend"
IMAGE_NAME_BACKEND="portfolio-backend"
IMAGE_NAME_NGINX="portfolio-nginx"

echo "Building version: $VERSION"
echo "Frontend: $DOCKER_USERNAME/$IMAGE_NAME_FRONTEND:$VERSION"
echo "Backend: $DOCKER_USERNAME/$IMAGE_NAME_BACKEND:$VERSION"
echo "Nginx: $DOCKER_USERNAME/$IMAGE_NAME_NGINX:$VERSION"

# Build and tag with both version and latest
docker build -t $DOCKER_USERNAME/$IMAGE_NAME_FRONTEND:$VERSION \
             -t $DOCKER_USERNAME/$IMAGE_NAME_FRONTEND:latest .

docker build -t $DOCKER_USERNAME/$IMAGE_NAME_BACKEND:$VERSION \
             -t $DOCKER_USERNAME/$IMAGE_NAME_BACKEND:latest ./backend

docker build -t $DOCKER_USERNAME/$IMAGE_NAME_NGINX:$VERSION \
             -t $DOCKER_USERNAME/$IMAGE_NAME_NGINX:latest ./nginx

# Push both version and latest tags
echo "Pushing frontend images..."
docker push $DOCKER_USERNAME/$IMAGE_NAME_FRONTEND:$VERSION
docker push $DOCKER_USERNAME/$IMAGE_NAME_FRONTEND:latest

echo "Pushing backend images..."
docker push $DOCKER_USERNAME/$IMAGE_NAME_BACKEND:$VERSION
docker push $DOCKER_USERNAME/$IMAGE_NAME_BACKEND:latest

echo "Pushing nginx images..."
docker push $DOCKER_USERNAME/$IMAGE_NAME_NGINX:$VERSION
docker push $DOCKER_USERNAME/$IMAGE_NAME_NGINX:latest

echo "Successfully pushed all images" 