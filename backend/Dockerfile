# Build stage
FROM node:18-alpine as build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies and generate package-lock.json
RUN npm install

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy package files and built code
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist

# Install production dependencies only
RUN npm install --omit=dev

# Expose port
EXPOSE 3000

CMD ["npm", "run", "start:prod"] 