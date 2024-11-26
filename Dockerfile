# Use Node.js v10.24.1 as the base image (aligning with the specified version in package.json)
FROM node:10.24.1

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose the port the app runs on (if applicable)
EXPOSE 3560

# Define the command to start the app
CMD ["npm", "start"]

# docker run -p 3560:3560 personal-website
