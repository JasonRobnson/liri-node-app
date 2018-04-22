require("dotenv").config();

// Requires the node file system to 
let fs = require("fs");
// require the appropriate module for Twitter and Spotify
let Twitter = require('twitter');
let Spotify = require('node-spotify-api');

// requires the keys.js module that holds the acces points to the .env file for the access credentials
let keys = require('./keys.js');
let client = new Twitter(keys.twitter);
let spotify = new Spotify(keys.spotify);
console.log(spotify);

// Used for Switch stament to identify Tech used
let switchTarget = process.argv[2];


// FileSystem reading the randomtxt file, with the UTF8 encolding, with a callback function of error and data
fs.readFile("random.txt", "utf8", function (error, data) {
    if (error) {
        return console.log(error);
    }
    dataArray = data.split(",");
    // console.log(dataArray);
})

// Capturing the user multiple arguments
let nodeArgs = process.argv;

// usersearch variable left blank so it can hold arguments after ran through the for loop
let userSearch = "";

for (let i = 2; i < nodeArgs.length; i++) {
    if (i > 2 && i < nodeArgs.length) {
        userSearch = userSearch + "+" + nodeArgs[i];
    } else {

        userSearch += nodeArgs[i];

    }
}
//verified that we are capturing all info the user is putting in
console.log(userSearch);

// this begins the switch statement that choses between Spotify, Twitter, ODM, Do what it says
switch (switchTarget) {
    case 'spotify-this-song':
        
    
        console.log("You chose Spoitfy!");
        break;
    case 'my-tweets':
    // api call commands for Twitter
        var params = {
            screen_name: "@JRob_Developer"
        };
        client.get('statuses/user_timeline', params, function (error, tweets, response) {
                    if (!error) {

                for (let i = 0; i < 10; i++) {
                        console.log(tweets[i].text);
                        console.log(tweets[i].created_at);
                }
                        }
        });
             
            
             console.log("You chose Twitter!");
             break;
    case 'movie-this':
            let movieParam = userSearch.split("+");
            console.log(movieParam[1]);
            let queryUrl = "http://www.omdbapi.com/?t=" + movieParam[1] + "&s=&plot=short&apikey=trilogy";
            console.log(queryUrl);
            let request = require ('request');
            request(queryUrl, function (error, response, body){
                if (error) {
                    console.log(error);
                } else {
                            let movieInfo = JSON.parse(body);
                            console.log(movieInfo.Title);
                            console.log(movieInfo.Plot);
                            console.log("Some noteable talent within this film are " + movieInfo.Actors);
                            console.log("This movie was filmed in " + movieInfo.Year);
                            console.log("The IMDB gave this movie a " + movieInfo.imdbRating + "out of 10.");
                            console.log(movieInfo.Ratings[1]);
                            console.log("This movie was filmed in " + movieInfo.Country);
                            console.log("The language of this film is " + movieInfo.Language);
                       }
                })
    console.log("You chose ODM!");
    break;
             case 'do-what-it-says':
             console.log("You chose Do what it say!");
             break;
}