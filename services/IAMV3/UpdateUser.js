import {IAMClient, UpdateUserCommand} from "@aws-sdk/client-iam"

const iamClient = new IAMClient()


const params = {
    UserName:"NewRaj",
    NewUserName:'updated_NewRaj'
}


const run = async() => {
    try {
        const data = await iamClient.send(new UpdateUserCommand(params))
        console.log(data);
        return data
        
    }catch(err) {
        console.log(err);
        
    }
}

run()