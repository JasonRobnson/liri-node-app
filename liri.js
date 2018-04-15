// require("dotenv").config();

// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);

let fs = require("fs");

fs.readFile("random.txt", "utf8", function(error,data){
    if (error){
        return console.log(error);
    }
    console.log(data);
    dataArray = data.split(",");
    console.log(dataArray);
})

