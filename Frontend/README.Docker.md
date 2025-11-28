# Docker Setup for Balkan Women Connect Frontend

## 📋 Prerequisites

- Docker installed (version 20.10+)
- Docker Compose installed (version 2.0+)

## 🚀 Quick Start

### Using Docker Compose (Recommended)

```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

The application will be available at: `http://localhost:8080`

### Using Docker CLI

```bash
# Build the image
docker build -t balkani-frontend .

# Run the container
docker run -d -p 8080:80 --name balkani-frontend balkani-frontend

# View logs
docker logs -f balkani-frontend

# Stop the container
docker stop balkani-frontend

# Remove the container
docker rm balkani-frontend
```

## 🏗️ Build Details

The Dockerfile uses a **multi-stage build**:

1. **Stage 1 (Build)**:
   - Uses Node.js 20 Alpine
   - Installs dependencies with `npm ci`
   - Builds the Angular application for production

2. **Stage 2 (Production)**:
   - Uses nginx Alpine (lightweight)
   - Copies built files from Stage 1
   - Serves the application on port 80

## ⚙️ Configuration

### nginx.conf

The nginx configuration includes:
- **Gzip compression** for better performance
- **Security headers** (X-Frame-Options, X-XSS-Protection, etc.)
- **Cache control** for static assets (1 year)
- **SPA routing support** (redirects all requests to index.html)

### Port Configuration

To change the exposed port, edit `docker-compose.yml`:

```yaml
ports:
  - "YOUR_PORT:80"  # Change YOUR_PORT to desired port
```

## 🔧 Development

For development with hot reload, use the Angular dev server:

```bash
npm start
```

Docker is intended for production deployment only.

## 📦 Image Size

The final Docker image is optimized:
- Base: nginx:alpine (~23 MB)
- Application: ~10-15 MB
- **Total**: ~35-40 MB

## 🐛 Troubleshooting

### Port already in use

```bash
# Check what's using port 8080
lsof -i :8080

# Or use a different port in docker-compose.yml
```

### Build fails

```bash
# Clean build
docker-compose build --no-cache

# Or with Docker CLI
docker build --no-cache -t balkani-frontend .
```

### Container won't start

```bash
# Check logs
docker-compose logs

# Or
docker logs balkani-frontend
```

## 🌐 Production Deployment

For production deployment on cloud platforms:

### Azure Container Registry

```bash
# Tag the image
docker tag balkani-frontend youracr.azurecr.io/balkani-frontend:latest

# Push to ACR
docker push youracr.azurecr.io/balkani-frontend:latest
```

### Docker Hub

```bash
# Tag the image
docker tag balkani-frontend yourusername/balkani-frontend:latest

# Push to Docker Hub
docker push yourusername/balkani-frontend:latest
```

## 📄 License

This project is part of the Balkan Women Connect platform.
