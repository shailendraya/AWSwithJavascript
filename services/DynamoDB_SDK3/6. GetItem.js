import {DynamoDBClient, GetItemCommand} from "@aws-sdk/client-dynamodb";


const ddbClient = new DynamoDBClient();

const params = {
    TableName:'Employee',
    Key: {
        id:{N:"3"}
    }
}

const run = async() => {
    try {
        const data = await ddbClient.send(new GetItemCommand(params));
        const items = data.Item;
        console.log(items);
    }catch(err) {
        console.log(err);
        
    }
    
}

run();