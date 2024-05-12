const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient();

const table = "Movies";

const year = 2022;
const title = "New movie"


const params = {
    TableName:table,
    Item:{
        "year":year,
        "title":title,
        "info": {
            "plot":"This is new movie",
            "rating":2
        }
    }
}

console.log("Adding the movie ... ");

docClient.put(params, function(err, data) {
    if(err) {
        console.log('Unable to add the movie', err);
        
    }else {
        console.log('Movie added', data);
        
    }
})
