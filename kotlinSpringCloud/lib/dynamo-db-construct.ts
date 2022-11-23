import { Construct } from 'constructs';
import { AttributeType, BillingMode, Table } from 'aws-cdk-lib/aws-dynamodb';

export class DynamoDbConstruct extends Construct {
  readonly userTable: Table;

  constructor (scope: Construct, id: string) {
    super(scope, id);

    new Table(this, 'user-table', {
      partitionKey: {
        name: 'id',
        type: AttributeType.STRING,
      },
      tableName: 'Users',
      billingMode: BillingMode.PROVISIONED,
    });
  }
}