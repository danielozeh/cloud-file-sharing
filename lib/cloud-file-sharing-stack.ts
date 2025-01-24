import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as s3 from '@aws-cdk/aws-s3';
import * as apigateway from '@aws-cdk/aws-apigateway';

export class CloudFileSharingStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Create S3 bucket
        const bucket = new s3.Bucket(this, 'FileSharingBucket', {
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS,
            removalPolicy: cdk.RemovalPolicy.DESTROY, // Change to RETAIN for production
            publicReadAccess: true, // Enable public access for file viewing
        });

        // Create Lambda function for generating pre-signed URLs
        const getPresignedUrlLambda = new lambda.Function(this, 'GetPresignedUrlFunction', {
            runtime: lambda.Runtime.NODEJS_16_X,
            handler: 'index.getPresignedUrl',
            code: lambda.Code.fromAsset('src'),
            environment: {
                BUCKET_NAME: bucket.bucketName,
            },
        });

        // Create API Gateway
        const api = new apigateway.RestApi(this, 'FileSharingApi', {
            restApiName: 'File Sharing Service',
            deployOptions: {
                stageName: 'dev',
            },
        });

        // API Gateway Key for security
        const apiKey = api.addApiKey('ApiKey');

        const usagePlan = api.addUsagePlan('UsagePlan', {
            name: 'FileSharingPlan',
            apiKey,
            throttle: {
                rateLimit: 10,
                burstLimit: 2,
            },
        });

        // API Gateway GET request for presigned URLs
        const presignedUrlResource = api.root.addResource('get-url');
        presignedUrlResource.addMethod('GET', new apigateway.LambdaIntegration(getPresignedUrlLambda), {
            apiKeyRequired: true,
        });

        // Grant Lambda access to S3 bucket
        bucket.grantReadWrite(getPresignedUrlLambda);

        new cdk.CfnOutput(this, 'BucketName', { value: bucket.bucketName });
        new cdk.CfnOutput(this, 'ApiEndpoint', { value: api.url });
    }
}
