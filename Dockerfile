# Use official Node LTS image
FROM node:lts

# Ensure non-interactive apt and reduce image size
ENV DEBIAN_FRONTEND=noninteractive

# Install system dependencies needed by the bot
RUN apt-get update && \
    apt-get install -y --no-install-recommends ffmpeg imagemagick webp && \
    rm -rf /var/lib/apt/lists/*

# Create app directory
WORKDIR /app

# Copy package files first for Docker layer caching
COPY package*.json ./

# Install node dependencies
RUN npm install --production && npm cache clean --force

# Copy application code
COPY . .

# Expose the port (Render provides PORT env var at runtime)
EXPOSE 3000

# Default NODE_ENV
ENV NODE_ENV=production

# Use the PORT env provided by Render at runtime. The app should listen on process.env.PORT.
CMD ["npm", "run", "start"]
