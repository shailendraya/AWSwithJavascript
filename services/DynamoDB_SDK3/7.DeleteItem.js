import {DynamoDBClient, DeleteItemCommand} from "@aws-sdk/client-dynamodb";


const ddbClient = new DynamoDBClient();

const params = {
    TableName: "Employee",
    Key: {
        id: {N:"3"}
    }
}

const run = async() => {
    try {
        const data = await ddbClient.send(new DeleteItemCommand(params));
        console.log('Item deleted', data);
        
    }catch(err) {
        console.log(err);
        
    }

}

run();