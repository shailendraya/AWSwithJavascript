import {DynamoDBClient, ListTablesCommand} from "@aws-sdk/client-dynamodb";

const ddbClient = new DynamoDBClient();


const run = async() => {
    try {
        const data = await ddbClient.send(new ListTablesCommand({}));
        //console.log(data);
        console.log(data.TableNames.join('\n'));
        
        return data;
        
    }catch(err) {
        console.log(err);
        
    }
}

run();