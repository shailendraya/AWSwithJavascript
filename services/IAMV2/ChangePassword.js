const AWS = require('aws-sdk')

const iam = new AWS.IAM()

const params = {
    NewPassword:'Shailu@awss89',
    OldPassword:'Shailu@aws89'
}

iam.changePassword(params, (err, data) => {
    if(err) {
        console.log(err);
        
    }else {
        console.log(data);
        
    }
})