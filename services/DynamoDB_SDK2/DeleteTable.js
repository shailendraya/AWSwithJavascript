const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB();

const params = {
    TableName:"employees"
}

dynamodb.deleteTable(params, function(err, data) {
    if(err) {
        console.log("can not delete", err);
        
    } else {
        console.log('table is delete', data);
        
    }
})