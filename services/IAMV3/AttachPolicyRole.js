import {IAMClient, AttachRolePolicyCommand,} from '@aws-sdk/client-iam';


const client = new IAMClient();

const role_name = "MyJavaScriptRole";

const policy_name = "MyJavaScriptPolicy";


async function attachPolicyToRole() {
    try {
        const command = new AttachRolePolicyCommand({
            RoleName: role_name,
            PolicyArn: "arn:aws:iam::121456538223:policy/MyJavaScriptPolicy"
        });

        const response = await client.send(command);
        console.log(`Policy ${policy_name} attache dto IAM Role ${role_name}`);
    }catch(err) {
        console.error('Error : ', err);
    }
}

attachPolicyToRole();