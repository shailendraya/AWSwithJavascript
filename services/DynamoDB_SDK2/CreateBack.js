const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB();

 const params = {
    BackupName:'employeesbackup',
    TableName:'employees'
}

dynamodb.createBackup(params, function(err, data) {
    if(err) {
        console.log(err);
        
    }else {
        console.log(data);
        
    }
}) 






