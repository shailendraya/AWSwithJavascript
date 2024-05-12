const AWS = require('aws-sdk');


const dynamodb = new AWS.DynamoDB();


const params = {
    TableName:'employee'
}

dynamodb.describeTable(params, (err, data) => {
    if(err) {
        console.log(err, err.stack);
        
    } else {
        console.log(data);
        
    }
})