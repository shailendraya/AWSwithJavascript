import {IAMClient, CreatePolicyCommand} from '@aws-sdk/client-iam';


const client = new IAMClient();

const policy_name = "MyJavaScriptPolicy";

const policy_document = {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::parwiz-forogh-12/*"
        }
    ]
};

async function createIAMPolicy() {
    try {
        const command = new CreatePolicyCommand({
            PolicyName:policy_name,
            PolicyDocument:JSON.stringify(policy_document)
        });

        const response = await client.send(command);
        console.log('Policy created')
    }catch(err) {
        console.error('Error : ', err);
    }
}

createIAMPolicy();