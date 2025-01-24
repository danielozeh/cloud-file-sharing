import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export async function logFileUpload(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
    console.log('File uploaded:', event.body);

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'File upload logged' }),
    };
}
