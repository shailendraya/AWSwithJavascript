import {IAMClient, CreateInstanceProfileCommand} from "@aws-sdk/client-iam";


const client = new IAMClient();

const instance_profile_name = "MyJavaScriptProfile";

async function createInstanceProfile() {
    try {
        const command = new CreateInstanceProfileCommand({
            InstanceProfileName: instance_profile_name
        });

        const response = await client.send(command);
        console.log(`IAM Instance Profile ${instance_profile_name} created`);
    } catch(err) {
        console.error('Error : ', err);
    }
}

createInstanceProfile();