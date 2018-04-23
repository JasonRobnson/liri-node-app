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
let spotifySearch = process.argv[3];


//Functions that will be used multiple times

function spotifyQuery (spotifySearch){
    
    spotify.search({ type: 'track', query: spotifySearch }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        } 
        for(let i = 0; i < 1; i++) {
            // console.log(data.tracks.items[i]);
            console.log(data.tracks.items[i].artists[0].name + " is your Artist");
            console.log("Your entered song is " + data.tracks.items[i].name);
            console.log("Here is the link to your song:" + data.tracks.items[i].album.artists[0].external_urls.spotify);
            console.log(data.tracks.items[i].album.name + " is the Album that your song is from.");
            
        }
        
      })
};

function odmQuery (movieParam){


     let queryUrl = "http://www.omdbapi.com/?t=" + movieParam[1] + "&s=&plot=short&apikey=trilogy";
     let request = require('request');
     request(queryUrl, function(error, response, body){
         if(error) {
             console.log(error);
         } else {
           let movieInfo = JSON.parse(body);
           console.log(movieInfo.Title);
           console.log(movieInfo.Plot);
           console.log("Some noteable talent within this film are " + movieInfo.Actors);
           console.log("This movie was filmed in " + movieInfo.Year);
           console.log("The IMDB gave this movie a " + movieInfo.imdbRating + "out of 10.");
           console.log(movieInfo.Ratings[1].Source  + " " + movieInfo.Ratings[1].Value );
           console.log("This movie was filmed in " + movieInfo.Country);
           console.log("The language of this film is " + movieInfo.Language);
         }
    })
  };

for (let i = 2; i < nodeArgs.length; i++) {
    if (i > 2 && i < nodeArgs.length) {
        userSearch = userSearch + "+" + nodeArgs[i];
    } else {

        userSearch += nodeArgs[i];

    }
}
// this begins the switch statement that choses between Spotify, Twitter, ODM, Do what it says
switch (switchTarget) {
    case 'spotify-this-song':
            spotifyQuery(spotifySearch);
 
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
             
            
             break;
    case 'movie-this':
                 let movieParam = userSearch.split("+");
               if (movieParam[1] === undefined){
                  movieParam.push("Mr.Nobody")
                    odmQuery(movieParam);
                  break;
               } 

               let fullMovieParam = userSearch.split("+");
            odmQuery(fullMovieParam);
            break;

             case 'do-what-it-says':
             fs.readFile("random.txt", "utf8", function(error, data){
                 if (error){
                     return console.log(error);
                 }
                 let doText = data.split(",");
                 let doWhatSong = doText[1];
                 spotifyQuery(doWhatSong);

             })
             break;
}


