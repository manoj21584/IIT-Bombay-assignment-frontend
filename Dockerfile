# Use the official Node.js Alpine image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json 
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app using Vite
RUN npm run build

# Install a simple HTTP server to serve the production build
RUN npm install -g serve

# Expose the port where the app will run
EXPOSE 3000

# Serve the build folder
CMD ["serve", "-s", "dist"]
