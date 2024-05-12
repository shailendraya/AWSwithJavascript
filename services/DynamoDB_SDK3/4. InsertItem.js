import {DynamoDBClient, PutItemCommand} from "@aws-sdk/client-dynamodb";

const ddbClient = new DynamoDBClient();

const params = {
    TableName:'Employee',
    Item: {
        id: {N:"3"},
        emp_name:{S:'test'}

    }
};

const run = async() => {
    try {
        const data = await ddbClient.send(new PutItemCommand(params));
        console.log(data);
        return data;
        
    }catch(err) {
        console.log(err);
        
    }
    
}

run();