const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB()

const params = {
    ProvisionedThroughput :{
        ReadCapacityUnits:1,
        WriteCapacityUnits:1
    },
    TableName:'Movies'

}

dynamodb.updateTable(params, function(err, data) {
    if(err) {
        console.log(err);
        
    }else {
        console.log(data);
        
    }
})