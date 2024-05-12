const AWS = require('aws-sdk');


const dynamodb = new AWS.DynamoDB();


const params = {
    RequestItems: {
        'Test':[
            {
                PutRequest :{
                    Item: {
                        'id' :{
                            S:'3'
                        },
                        'date':{
                            S:'12/05/2024'
                        },

                        
                    }
                }
            },

            {
                PutRequest :{
                    Item: {
                        'id' :{
                            S:'4'
                        },
                        'date':{
                            S:'13/05/2024'
                        },

                        
                    }
                }

            }, 

            {
                PutRequest :{
                    Item: {
                        'id' :{
                            S:'5'
                        },
                        'date':{
                            S:'14/05/2024'
                        },

                        
                    }
                }
            }
        ]
    }
}

dynamodb.batchWriteItem(params, function(err, data) {
    if(err) {
        console.log(err);
        
    }else {
        console.log(data);
        
    }
})