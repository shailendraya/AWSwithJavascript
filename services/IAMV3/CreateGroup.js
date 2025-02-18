import {IAMClient, CreateGroupCommand} from "@aws-sdk/client-iam"

const iamClient = new IAMClient()

const params = {
    GroupName:'New_Group'
}

const run = async() => {
    try {
        const data = await iamClient.send(new CreateGroupCommand(params))
        console.log("Group is created", data);
        
    }catch(err) {
        console.log(err);
        
    }
}

run()