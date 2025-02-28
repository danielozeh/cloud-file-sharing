export const config = {
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    bucketName: process.env.S3_BUCKET_NAME,
  },
  apiKey: process.env.API_KEY,
  support_email: process.env.SUPPORT_EMAIL,
};
