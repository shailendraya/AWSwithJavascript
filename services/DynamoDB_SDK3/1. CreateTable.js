import {DynamoDBClient, CreateTableCommand} from "@aws-sdk/client-dynamodb";

//{'region':'us-east-1'}

const ddbClient = new DynamoDBClient();

const params = {
    TableName:"Employee",
    KeySchema:[
        {
            AttributeName:'id',
            KeyType:'HASH'
        }
    ],

    AttributeDefinitions:[
       {
            AttributeName:'id',
            AttributeType:'N'
       }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits:3,
        WriteCapacityUnits:3
    }
}

const run = async() => {
    try {
        const data = await ddbClient.send(new CreateTableCommand(params));
        console.log("Table is created", data);
        return data;
        
    }catch(err) {
        console.log(err);
        
    }
}

run();
