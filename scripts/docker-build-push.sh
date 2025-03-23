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

# Function to delete image if it exists
delete_image() {
    local image=$1
    local tag=$2
    echo "Checking if $image:$tag exists..."
    if curl --silent -f -lSL "https://hub.docker.com/v2/repositories/${image}/tags/${tag}" > /dev/null 2>&1; then
        echo "Deleting $image:$tag from Docker Hub..."
        curl -X DELETE -H "Authorization: JWT $DOCKER_TOKEN" "https://hub.docker.com/v2/repositories/${image}/tags/${tag}/"
    else
        echo "$image:$tag does not exist on Docker Hub"
    fi
}

# Function to verify image exists
verify_image() {
    local image=$1
    local tag=$2
    echo "Verifying $image:$tag exists..."
    for i in {1..30}; do
        if curl --silent -f -lSL "https://hub.docker.com/v2/repositories/${image}/tags/${tag}" > /dev/null 2>&1; then
            echo "✓ Verified $image:$tag is available"
            return 0
        fi
        echo "Waiting for image to be available... attempt $i/30"
        sleep 2
    done
    echo "❌ Failed to verify $image:$tag"
    return 1
}

# Function to delete local image if it exists
delete_local_image() {
    local image=$1
    local tag=$2
    if docker image inspect "$image:$tag" >/dev/null 2>&1; then
        echo "Deleting local image $image:$tag..."
        docker rmi "$image:$tag" >/dev/null 2>&1
    else
        echo "Local image $image:$tag does not exist"
    fi
}

# Delete existing images from Docker Hub and locally
echo "Removing existing images from Docker Hub and locally..."
delete_image "$DOCKER_USERNAME/$IMAGE_NAME_FRONTEND" "$VERSION"
delete_image "$DOCKER_USERNAME/$IMAGE_NAME_FRONTEND" "latest"
delete_local_image "$DOCKER_USERNAME/$IMAGE_NAME_FRONTEND" "$VERSION"
delete_local_image "$DOCKER_USERNAME/$IMAGE_NAME_FRONTEND" "latest"

delete_image "$DOCKER_USERNAME/$IMAGE_NAME_BACKEND" "$VERSION"
delete_image "$DOCKER_USERNAME/$IMAGE_NAME_BACKEND" "latest"
delete_local_image "$DOCKER_USERNAME/$IMAGE_NAME_BACKEND" "$VERSION"
delete_local_image "$DOCKER_USERNAME/$IMAGE_NAME_BACKEND" "latest"

delete_image "$DOCKER_USERNAME/$IMAGE_NAME_NGINX" "$VERSION"
delete_image "$DOCKER_USERNAME/$IMAGE_NAME_NGINX" "latest"
delete_local_image "$DOCKER_USERNAME/$IMAGE_NAME_NGINX" "$VERSION"
delete_local_image "$DOCKER_USERNAME/$IMAGE_NAME_NGINX" "latest"

# Build and push frontend
echo "Building and pushing frontend..."

docker build --no-cache \
             --build-arg CACHEBUST="$(date +%s%N)" \
             -t $DOCKER_USERNAME/$IMAGE_NAME_FRONTEND:$VERSION \
             -t $DOCKER_USERNAME/$IMAGE_NAME_FRONTEND:latest ./frontend && \
docker push $DOCKER_USERNAME/$IMAGE_NAME_FRONTEND:$VERSION && \
docker push $DOCKER_USERNAME/$IMAGE_NAME_FRONTEND:latest && \
verify_image "$DOCKER_USERNAME/$IMAGE_NAME_FRONTEND" "$VERSION" && \
verify_image "$DOCKER_USERNAME/$IMAGE_NAME_FRONTEND" "latest"

# Build and push backend
echo "Building and pushing backend..."
docker build -t $DOCKER_USERNAME/$IMAGE_NAME_BACKEND:$VERSION \
             -t $DOCKER_USERNAME/$IMAGE_NAME_BACKEND:latest ./backend && \
docker push $DOCKER_USERNAME/$IMAGE_NAME_BACKEND:$VERSION && \
docker push $DOCKER_USERNAME/$IMAGE_NAME_BACKEND:latest && \
verify_image "$DOCKER_USERNAME/$IMAGE_NAME_BACKEND" "$VERSION" && \
verify_image "$DOCKER_USERNAME/$IMAGE_NAME_BACKEND" "latest"

# Build and push nginx
echo "Building and pushing nginx..."
docker build -t $DOCKER_USERNAME/$IMAGE_NAME_NGINX:$VERSION \
             -t $DOCKER_USERNAME/$IMAGE_NAME_NGINX:latest ./nginx && \
docker push $DOCKER_USERNAME/$IMAGE_NAME_NGINX:$VERSION && \
docker push $DOCKER_USERNAME/$IMAGE_NAME_NGINX:latest && \
verify_image "$DOCKER_USERNAME/$IMAGE_NAME_NGINX" "$VERSION" && \
verify_image "$DOCKER_USERNAME/$IMAGE_NAME_NGINX" "latest"

# Check if all operations were successful
if [ $? -eq 0 ]; then
    echo "✅ Successfully built and pushed all images"
    exit 0
else
    echo "❌ Failed to build or push some images"
    exit 1
fi 