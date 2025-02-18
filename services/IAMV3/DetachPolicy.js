import {IAMClient, DetachUserPolicyCommand} from "@aws-sdk/client-iam"

const iamClient = new IAMClient()


const params = {
    PolicyArn:"RDSAdmmins",
    UserName:'updated_NewRaj'
}


const run = async() => {
    try {
        const data = await iamClient.send(new DetachUserPolicyCommand(params))
        console.log('Policy is detached', data);
        
    }catch(err) {
        console.log(err);
        
    }
}

run()