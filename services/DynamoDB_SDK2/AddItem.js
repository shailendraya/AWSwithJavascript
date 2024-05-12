const AWS = require('aws-sdk');

//AWS.config.update({'region':'us-east-1'})

const dyanmodb = new AWS.DynamoDB();


const params = {
    TableName:'Test',
    Item: {
        'id':{
            'S':'2'
        },
        'date':{
            'S':'12/05/2024'
        }
    }
}

dyanmodb.putItem(params, function(err, data) {
    if(err) {
        console.log(err);
        
    }else {
        console.log(data);
        
    }
})