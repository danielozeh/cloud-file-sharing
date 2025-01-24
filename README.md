# Cloud File Sharing API
## Description

This is a simple cloud-based file sharing application using
AWS.

## Prerequisites

- Node.js
- Docker

## Clone the repo

```bash
git clone https://github.com/danielozeh/cloud-file-sharing.git
```

## Project Structure

```bash
├── src
│   ├── app.ts
│   ├── config
│   │   ├── index.ts
│   │   └── awsConfig.ts
│   ├── controllers
│   │   ├── fileController.ts
│   ├── middleware
│   │   ├── apiKeyAuth.ts
│   ├── routes
│   │   ├── file.routes.ts
│   ├── services
│   │   ├── s3.service.ts
│   ├── utils
│   │   ├── response.ts
│   │   └── logger.ts
│   └── server.ts
└── README.md
├── .env.example
├── .gitignore
├── Dockerfile
├── package.json
├── tsconfig.json
```

## Navigate to the project directory

```bash
cd cloud-file-sharing
```

## Install Docker Optionally

```bash
brew install docker
```

## Install dependencies

```bash
npm install
```

## Create .env file

```bash
cp .env.example .env
```

## Update .env file with your correct credentials (example below)

```bash
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=
AWS_BUCKET_NAME=
API_KEY=1234567890
SUPPORT_EMAIL=support@example.com
```

## Run the app

```bash
npm run dev
```

## Using Docker

```bash
docker build -t cloud-file-sharing .
docker run -p 4000:4000 cloud-file-sharing
```

## Test the API

### Get a presigned URL

```bash
curl -H "x-api-key: 1234567890" \
     "http://localhost:4000/api/files/presigned-url?filename=my-image.jpg"
```

### Upload an image

```bash
curl -X PUT -T my-image.jpg "PRESIGNED_URL_HERE"
```

### View the image in a browser

```bash
http://localhost:4000/api/files/view/my-image.jpg

```
