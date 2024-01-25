# Stage 1: Build stage
FROM node:18-alpine3.17 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Vite project with production optimizations
RUN npm run build


# Stage 2: Production stage
FROM node:18-alpine3.17 as production

WORKDIR /app

# Copy only necessary files from the build stage
COPY --from=build /app/package.json .
COPY --from=build /app/package-lock.json .
COPY --from=build /app/dist ./dist

# Install only production dependencies
RUN npm install -g vite

# Expose the port
EXPOSE 3000

# Start the production server
CMD ["npm", "run","preview"]
