#!/bin/bash

# Configuration
DOCKER_USERNAME="andreusimus3"
IMAGE_NAME_FRONTEND="portfolio-frontend"
IMAGE_NAME_BACKEND="portfolio-backend"
VERSION=$(date +%Y%m%d_%H%M%S)

# Colors for output
GREEN='\033[0;32m'
NC='\033[0m' # No Color

echo -e "${GREEN}Building and pushing Docker images...${NC}"

# Build images
echo -e "${GREEN}Building frontend image...${NC}"
docker build -t $DOCKER_USERNAME/$IMAGE_NAME_FRONTEND:latest -t $DOCKER_USERNAME/$IMAGE_NAME_FRONTEND:$VERSION .

echo -e "${GREEN}Building backend image...${NC}"
docker build -t $DOCKER_USERNAME/$IMAGE_NAME_BACKEND:latest -t $DOCKER_USERNAME/$IMAGE_NAME_BACKEND:$VERSION -f backend/Dockerfile backend

# Push images
echo -e "${GREEN}Pushing frontend image...${NC}"
docker push $DOCKER_USERNAME/$IMAGE_NAME_FRONTEND:latest
docker push $DOCKER_USERNAME/$IMAGE_NAME_FRONTEND:$VERSION

echo -e "${GREEN}Pushing backend image...${NC}"
docker push $DOCKER_USERNAME/$IMAGE_NAME_BACKEND:latest
docker push $DOCKER_USERNAME/$IMAGE_NAME_BACKEND:$VERSION

echo -e "${GREEN}Done! Images pushed successfully:${NC}"
echo "Frontend: $DOCKER_USERNAME/$IMAGE_NAME_FRONTEND:$VERSION"
echo "Backend: $DOCKER_USERNAME/$IMAGE_NAME_BACKEND:$VERSION" 