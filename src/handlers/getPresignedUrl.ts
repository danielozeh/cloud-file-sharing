import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { S3Service } from '../services/s3Service';

const s3Service = new S3Service();

export async function getPresignedUrl(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
    try {
        const fileName = event.queryStringParameters?.fileName;
        if (!fileName) {
            return { statusCode: 400, body: JSON.stringify({ error: 'Missing fileName parameter' }) };
        }

        console.log('Generating presigned URL for:', fileName);

        const presignedUrl = await s3Service.getPresignedUrl(fileName);
        console.log('Presigned URL:', presignedUrl);
        return {
            statusCode: 200,
            body: JSON.stringify({ url: presignedUrl }),
        };
    } catch (error) {
        console.error('Error generating presigned URL:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to generate pre-signed URL' }),
        };
    }
}
