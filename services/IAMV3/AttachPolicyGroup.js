import {IAMClient, AttachGroupPolicyCommand} from '@aws-sdk/client-iam'

const iamClient = new IAMClient()


const params = {
    GroupName:'New_Group',
    PolicyArn:'arn:aws:iam::464784860415:policy/newuserfullpolicy'
}

const run = async() => {
    try {
        const data = await iamClient.send(new AttachGroupPolicyCommand(params))
        console.log('Policy is attached to group', data);
        
    }catch(err) {
        console.log(err);
        
    }
}

run()