import {DynamoDBClient, BatchGetItemCommand} from "@aws-sdk/client-dynamodb";

const ddbClient = new DynamoDBClient();

const params = {
    RequestItems: {
        "Employee":{
            Keys: [
                {
                    "id":{
                        N:"1"
                    }
                },

                {
                    "id": {
                        N:"2"
                    }
                },

                {
                    "id": {
                        N:"3"
                    }
                }
            ]
        }
    }
}

const run = async() => {
    try {
        const data = await ddbClient.send(new BatchGetItemCommand(params));
        console.log(data.Responses["Employee"]);
        
    }catch(err) {
        console.log(err);
        
    }
}

run();