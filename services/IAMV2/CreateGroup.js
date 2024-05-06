const AWS = require('aws-sdk')

const iam = new AWS.IAM()


const params = {
    GroupName:'S3Admins_check'
}

iam.createGroup(params, function(err, data) {
    if(err) {
        console.log(err, err.stack);
        
    }else {
        console.log(data);
        
    }
})