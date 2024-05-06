const AWS = require('aws-sdk')

const iam = new AWS.IAM()

const params = {
    GroupName:'S3Admins'
}

iam.getGroup(params, (err, data) => {
    if(err) {
        console.log(err);
        
    }else {
        console.log(data);
        
    }
})