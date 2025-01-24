import AWS from 'aws-sdk';
import { config } from '../config';

const s3 = new AWS.S3();
const BUCKET_NAME = config.aws.bucketName;

export class S3Service {
    async getPresignedUrl(fileName: string): Promise<string> {
        console.log('Generating presigned URL for:', fileName);
        const params = {
            Bucket: BUCKET_NAME,
            Key: fileName,
            Expires: 300,
            ContentType: 'image/jpeg',
        };
        const url = await s3.getSignedUrlPromise('putObject', params);
        console.log('Generated presigned URL:', url);
        return url;
    }
}
