import {DynamoDBClient, DeleteTableCommand} from "@aws-sdk/client-dynamodb";


const ddbClient = new DynamoDBClient();

const params = {
    TableName:"Employee"
}

const run = async() => {
    try {
        const data = await ddbClient.send(new DeleteTableCommand(params));
        console.log('Table is deleted', data);
    
    }catch(err) {
        console.log(err);
        
    }
}

run();