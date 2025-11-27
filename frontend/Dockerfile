# --- Build Stage ---
FROM node:18-alpine AS build

WORKDIR /app

# Copy dependency files
COPY package*.json ./
RUN npm install

# Copy all frontend source code


COPY . .

# Build production files
RUN npm run build

# --- Serve Stage ---
FROM nginx:alpine

# Copy build output to Nginx HTML folder
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

