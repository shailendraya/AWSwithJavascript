const AWS = require('aws-sdk')

const iam = new AWS.IAM()

const params = {
    PolicyArn:"arn:aws:iam::464784860415:policy/newuserfullpolicy",
    UserName:"john"
}


iam.detachUserPolicy(params , (err, data) => {
    if(err) {
        console.log(err, err.stack);
        
    }else {
        console.log(data);
        
    }
})