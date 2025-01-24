#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CloudFileSharingStack } from '../lib/cloud-file-sharing-stack';

const app = new cdk.App();
new CloudFileSharingStack(app, 'CloudFileSharingStack');
