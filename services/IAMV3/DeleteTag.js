import {IAMClient, UntagUserCommand } from "@aws-sdk/client-iam";


const client = new IAMClient();

const user_name = 'user1';

const tag_keys = ['Department', 'Project']

async function removeTags() {
    try {
        const command = new UntagUserCommand({
            UserName:user_name,
            TagKeys:tag_keys
        });

        await client.send(command);
        console.log('Tags are removed')
         
    } catch(err) {
        console.error("Error : " + err)
    }
}

removeTags();