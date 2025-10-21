# Use official Node.js runtime as base image
FROM node:18

# Set working directory inside container
WORKDIR /usr/src/app

RUN npm init -y


# # Copy package files first (for better caching)
# COPY package*.json ./

# Install dependencies
RUN npm install express

# Copy application code
COPY . .

# Expose port that app runs on
EXPOSE 3000

# Command to start the application
CMD [ "npm", "start" ]


