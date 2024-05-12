const AWS = require('aws-sdk');

const fs = require('fs')


const docClient = new AWS.DynamoDB.DocumentClient();

console.log('Importing movies data');

const allMovies = JSON.parse(fs.readFileSync('moviedata.json', 'utf-8'));

allMovies.forEach(function(movie){
    const params = {
        TableName:'Movies',
        Item: {
            "year":movie.year,
            "title":movie.title,
            "info":movie.info
        }
    };

    docClient.put(params, function(err, data) {
        if(err) {
            console.log("Unable to add movie");
            
        } else {
            console.log("Movies added", movie.title);
            
        }
    })
}) 
