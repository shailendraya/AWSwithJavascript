import {DynamoDBClient, UpdateTableCommand} from "@aws-sdk/client-dynamodb";

const ddbClient = new DynamoDBClient();


const params = {
    ProvisionedThroughput: {
        ReadCapacityUnits:2,
        WriteCapacityUnits:2
    },

    TableName:"Employee"
}


const run = async() => {
    try {
        const data = await ddbClient.send(new UpdateTableCommand(params));
        console.log(data);
        return data;
        
    }catch(err) {
        console.log(err);
        
    }
}

run();