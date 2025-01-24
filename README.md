# Cloud File Sharing API
## Description

This project is a cloud-based file-sharing service that utilizes AWS Lambda, API Gateway, and S3 to provide a serverless, scalable, and cost-effective solution for managing file uploads and access. The system generates pre-signed URLs for secure file uploads and logs file access events.

## Prerequisites

- Node.js
- AWS CLI
- AWS Account

## Clone the repo

```bash
git clone https://github.com/danielozeh/cloud-file-sharing.git
```

## Navigate to the project directory

```bash
cd cloud-file-sharing
```

## Set up environment variables

Copy the .env.example file and rename it to .env.
Also update the .env file with your AWS credentials and other necessary variables.
```bash
cp .env.example .env
```

## Install AWS CLI

```bash
https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html
```

## Install dependencies

```bash
npm install
```

## Project Structure

```
|-- cloud-file-sharing/
|   |-- bin/
|       |-- cloud-file-sharing.ts
|   |-- lib/
|       |-- cloud-file-sharing-stack.ts
|   |-- src/
|       |-- handlers/
|           |-- getPresignedUrl.ts
|           |-- logFileUpload.ts
|           |-- logFileView.ts
|       |-- services/
|           |-- s3Service.ts
|       |-- utils/
|           |-- response.ts
|       |-- config/
|           |-- index.ts
|       |-- server.ts
|   |-- test/
|   |-- .env
|   |-- .env.example
|   |-- .gitignore
|   |-- README.md
|   |-- package.json
|   |-- tsconfig.json
|   |-- jest.config.js
|   |-- jest.setup.js
```

## Deployment
Make sure your AWS credentials are set up:

### Configure AWS CLI

```bash
aws configure
```

### Deploy the CDK stack

```bash
npx cdk bootstrap
```

```bash
npx cdk deploy
```


### Deploy the Lambda functions

```bash
npx cdk deploy
```

## Testing

### Get Presigned URL

```bash
curl -H "x-api-key: YOUR_API_KEY" "https://your-api-id.execute-api.us-east-1.amazonaws.com/dev/get-url?fileName=test-image.jpg"
```
### Example Response

```json
{
  "url": "https://your-s3-bucket.s3.amazonaws.com/test-image.jpg?AWSAccessKeyId=..."
}
```

### Upload the image

```bash
curl -X PUT -T ./test.jpg "https://your-s3-bucket.s3.amazonaws.com/test-image.jpg?AWSAccessKeyId=..."
```

### View the image

```bash
curl "https://your-s3-bucket.s3.amazonaws.com/test-image.jpg"
```

## Viewing the logs
Logs can be accessed in AWS CloudWatch under the Lambda function's log group:

```bash
AWS Console > CloudWatch > Log Groups > /aws/lambda/your-function-name
```

## Cleanup

To clean up the resources created by the CDK stack, run:

```bash
npx cdk destroy
```


## License

This project is licensed under the MIT License - see the LICENSE file for details.


## Author

Daniel Ozeh

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

