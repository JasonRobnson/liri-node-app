// require("dotenv").config();

// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);


// Requires the node file system to 
let fs = require("fs");

// FileSystem reading the randomtxt file, with the UTF8 encolding, with a callback function of error and data
fs.readFile("random.txt", "utf8", function(error,data){
    if (error){
        return console.log(error);
    }
    console.log(data);
    dataArray = data.split(",");
    // console.log(dataArray);
})

// Capturing the user multiple arguments
let nodeArgs = process.argv;
console.log(nodeArgs)

let userSearch = "";

for (let i = 2; i < nodeArgs.length; i++){
     if ( i > 2 && i < nodeArgs.length){
         userSearch = userSearch + "+" + nodeArgs[i];
        console.log(userSearch);
     }
     else {

      userSearch += nodeArgs[i];
      console.log(userSearch);

     }
}





