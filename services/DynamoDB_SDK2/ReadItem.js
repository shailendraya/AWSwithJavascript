const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient();

const table = "Movies";

const year = 2022;
const title = "New movie";


const params = {
    TableName:table,
    Key: {
        "year":year,
        "title":title
    }


};


docClient.get(params, function(err, data) {
    if(err) {
        console.log("unable to get movie", err);
        
    } else {
        console.log(data["Item"]);
        
    }
})
