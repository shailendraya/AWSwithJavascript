import {EC2Client, RunInstancesCommand} from "@aws-sdk/client-ec2";


const client = new EC2Client();

const instance_profile_name = "MyJavaScriptProfile";

const params = {
    ImageId: 'ami-067d1e60475437da2',
    InstanceType:'t2.micro',
    MinCount:1,
    MaxCount:1,
    IamInstanceProfile: {
        Name: instance_profile_name
    }
};


async function launchEc2Instance() {
    try {
        const command = new RunInstancesCommand(params);
        const response = await client.send(command);

        console.log("Instance is launced");
    } catch(err) {
        console.error('Error : ', err);
    
}
}

launchEc2Instance();
