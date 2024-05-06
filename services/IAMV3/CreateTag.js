import {IAMClient, TagUserCommand} from "@aws-sdk/client-iam";


const client = new IAMClient();

const user_name = "user1";

const tags = [{'Key':'Department', 'Value':'HR'}, {'Key':'Project', 'Value':'Onboarding'}];

async function addTagsUser() {
    try {
        const command = new TagUserCommand({
            UserName:user_name,
            Tags:tags
        })

        await client.send(command)
        console.log('Tags are added')
    } catch(err) {
        console.error("Error : " + err)
    }
}

addTagsUser();