const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB()


dynamodb.listTables(function(err, data) {
    if(err) {
        console.log(err, err.stack);
        
    } else {
        console.log(data['TableNames']);
        
    }
})