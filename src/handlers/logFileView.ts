import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export async function logFileView(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
    console.log('File viewed:', event.queryStringParameters);

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'File view logged' }),
    };
}
