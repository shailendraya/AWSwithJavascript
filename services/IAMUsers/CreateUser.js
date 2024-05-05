const AWS = require('aws-sdk');

const iam = new AWS.IAM()

const params = {
    UserName: 'Raj'
}

iam.createUser(params, (err, data) => {
    if(err){
        console.log(err)
    } else {
        console.log(data)
    }
})