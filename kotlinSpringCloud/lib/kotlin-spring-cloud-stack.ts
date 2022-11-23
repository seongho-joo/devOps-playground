import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { DynamoDbConstruct } from './dynamo-db-construct';

export class KotlinSpringCloudStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const dynamodb = new DynamoDbConstruct(this, 'user-dynamo-db');
  }
}
