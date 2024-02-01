FROM node:20-alpine

RUN apk add --no-cache bash

WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code needed for build
COPY src ./src
COPY build.sh .
COPY tsconfig.json .

# Build the app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3001

# Command to run the app

CMD ["npm", "start"]