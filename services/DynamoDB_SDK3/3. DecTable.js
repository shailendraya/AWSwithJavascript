import {DynamoDBClient, DescribeTableCommand} from "@aws-sdk/client-dynamodb";
import { retryMiddleware } from "@aws-sdk/middleware-retry";

const ddbClient = new DynamoDBClient();

const params = {TableName:'Employee'};

const run = async() => {
    try {
        const data = await ddbClient.send(new DescribeTableCommand(params));
        //console.log('Success', data);
        console.log(data.Table.KeySchema);
        
        return data;
        
    }catch(err) {
        console.log('Error', err);
        
    }
}

run();