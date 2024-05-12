const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB();


const params = {
    RequestItems: {
        "Test": {
            Keys:[
                {
                    "id": {
                        S:"1"
                    }
                }

                
            ]
        }
    }
}

dynamodb.batchGetItem(params, function(err, data) {
    if(err) {
        console.log(err, err.stack);
        
    } else {
        console.log(data)
        data.Responses.employee.forEach(function(element, index) {
            console.log(element);
            
        })
    }
})