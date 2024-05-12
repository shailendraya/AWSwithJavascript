
const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB();

//delete backup
const params = {
    BackupArn:'arn:aws:dynamodb:us-east-1:464784860415:table/employees/backup/01715511223990-4fd9bbdf'
}

dynamodb.deleteBackup(params, function(err, data) {
    if(err) {
        console.log(err);
        
    }else {
        console.log(data);
        
    }
})