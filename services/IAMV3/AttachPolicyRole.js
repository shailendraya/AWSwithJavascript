import {IAMClient, AttachRolePolicyCommand,} from '@aws-sdk/client-iam';


const client = new IAMClient();

const role_name = "MyJavaScriptRole";

const policy_name = "MyJavaScriptPolicyForS3Bucket";


async function attachPolicyToRole() {
    try {
        const command = new AttachRolePolicyCommand({
            RoleName: role_name,
            PolicyArn: "arn:aws:iam::464784860415:policy/MyJavaScriptPolicyForS3Bucket"
        });

        const response = await client.send(command);
        console.log(`Policy ${policy_name} attache dto IAM Role ${role_name} --- ${response}`);
    }catch(err) {
        console.error('Error : ', err);
    }
}

attachPolicyToRole();