import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";

const REGION = "eu-west-1";
const ATLAS_ORG_ID = "644e4cafbff4ee115f478eca";
const VPC = {
  id: "vpc-08126aa79b565567f",
  cidrBlock: "10.0.0.0/24",
  accountId: "665837571006",
};

export class DemoStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
  }
}
