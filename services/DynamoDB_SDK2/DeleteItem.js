const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient();

const table = "Movies";
const year = 2013;
const title = "Insidious: Chapter 2";


const params = {
    TableName:table,
    Key: {
        "year":year,
        "title":title
    }
};


console.log("Movie is deleting");
docClient.delete(params, function(err, data) {
    if(err) {
        console.log("Unable to delete", err);
        
    } else {
        console.log("Item is deleted", data);
        
    }
});


