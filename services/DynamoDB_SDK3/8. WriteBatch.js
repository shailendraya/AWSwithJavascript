import {DynamoDBClient, BatchWriteItemCommand} from "@aws-sdk/client-dynamodb";

const ddbClient = new DynamoDBClient();

const params = {
    RequestItems: {
        Employee: [
            {
                PutRequest: {
                    Item: {
                        id:{N:"2"},
                        emp_name:{S:"test2"}
                    }
                }
            },

            {
                PutRequest: {
                    Item: {
                        id:{N:"3"},
                        emp_name:{S:"test3"}
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        id:{N:"4"},
                        emp_name:{S:"test4"}
                    }
                }
            }
        ]
    }
}

const run = async() => {
    try {
        const data = await ddbClient.send(new BatchWriteItemCommand(params));
        console.log("Data is added", data);
        return data;
        
    }catch(err) {
        console.log(err);
        
    }
}

run();