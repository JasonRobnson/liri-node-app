require("dotenv").config();

// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);


// Requires the node file system to 
let fs = require("fs");

// Used for Switch stament to identify Tech used
let switchTarget = process.argv[2];


// FileSystem reading the randomtxt file, with the UTF8 encolding, with a callback function of error and data
fs.readFile("random.txt", "utf8", function(error,data){
    if (error){
        return console.log(error);
    }
    dataArray = data.split(",");
    // console.log(dataArray);
})

// Capturing the user multiple arguments
let nodeArgs = process.argv;

let userSearch = "";

for (let i = 2; i < nodeArgs.length; i++){
     if ( i > 2 && i < nodeArgs.length){
         userSearch = userSearch + "+" + nodeArgs[i];
     }
     else {

      userSearch += nodeArgs[i];

     }
}
//verified that we are capturing all info the user is putting in
console.log(userSearch);

// this begins the switch statement that choses between Spotify, Twitter, ODM, Do what it says
switch(switchTarget){
    case 'spotify-this-song':
    console.log("You chose Spoitfy!");
    break;
             case 'my-tweets':
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
                    console.log(body);
                       }
                })
    console.log("You chose ODM!");
    break;
             case 'do-what-it-says':
             console.log("You chose Do what it say!");
             break;
}

