const AWS = require('aws-sdk')

const iam = new AWS.IAM()

const params = {
    NewUserName: 'NewRaj',
    UserName: 'updatedRaj'
}

iam.updateUser(params, (err, data) => {
    if(err){
        console.log(err)
    }else {
        console.log(data)
    }
})