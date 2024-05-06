import {IAMClient, CreateRoleCommand} from "@aws-sdk/client-iam";


const client = new IAMClient();

const role_name = "MyJavaScriptRole";

const trust_policy = {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Service": "ec2.amazonaws.com"
            },
            "Action": "sts:AssumeRole"
        }
    ]
};


async function createIAMRole() {
    try {
        const command = new CreateRoleCommand({
            RoleName: role_name,
            AssumeRolePolicyDocument: JSON.stringify(trust_policy)
        });

        const response = await client.send(command);
        console.log(`IAM Role ${role_name} created`);

    }catch(err) {
        console.error("Error : ", err)
    }
}

createIAMRole();