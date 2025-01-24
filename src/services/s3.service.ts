import { s3 } from '../config/awsConfig';
import { config } from '../config';

const bucketName = config.aws.bucketName;

export const generatePresignedUrl = async (filename: string): Promise<string> => {
  const params = {
    Bucket: bucketName,
    Key: filename,
    Expires: 300, // 5 minutes
    ContentType: 'image/jpeg',
  };
  
  return await s3.getSignedUrlPromise('putObject', params);
};

export const getFileUrl = (filename: string): string => {
  return `https://${bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${filename}`;
};
