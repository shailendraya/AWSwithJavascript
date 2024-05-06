const AWS = require('aws-sdk')

const iam = new AWS.IAM()


const params = {
    GroupName:'S3Admins_check',
    PolicyArn:'arn:aws:iam::464784860415:policy/newuserfullpolicy'
}

iam.detachGroupPolicy(params, function(err, data) {
    if(err) {
        console.log(err);
        
    }else {
        console.log(data);
        
    }
})