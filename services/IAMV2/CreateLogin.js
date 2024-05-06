const AWS = require('aws-sdk')


const iam = new AWS.IAM()

const params = {
    Password:'Shailu@awss89',
    PasswordResetRequired:false,
    UserName:'john'
}

iam.createLoginProfile(params, function(err, data) {
    if(err) {
        console.log(err);
        
    } else {
        console.log(data);
        
    }
})