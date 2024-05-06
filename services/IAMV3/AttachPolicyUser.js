import { AttachUserPolicyCommand, IAMClient} from "@aws-sdk/client-iam"

const iamClient = new IAMClient()


const params = {
    PolicyArn:"arn:aws:iam::464784860415:policy/newuserfullpolicy",
    UserName:'john'
}

const run = async() => {
    try {
        const data = await iamClient.send(new AttachUserPolicyCommand(params))
        console.log('Attached the policy', data);
        
    }catch(err) {
        console.log(err);
        
    }
}

run()