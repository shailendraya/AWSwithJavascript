import {IAMClient, AddRoleToInstanceProfileCommand} from "@aws-sdk/client-iam";


const client = new IAMClient();

const instance_profile_name = "MyJavaScriptProfile";
const role_name = "MyJavaScriptRole";


async function addRoleToInstanceProfile() {
    try {
        const command = new AddRoleToInstanceProfileCommand({
            InstanceProfileName:instance_profile_name,
            RoleName:role_name
        });

        const response = await client.send(command);
        console.log(`IAM role ${role_name} add to Instance Profile ${instance_profile_name}`);

    } catch(err) {
        console.error('Error : ', err);
    }
}

addRoleToInstanceProfile();
