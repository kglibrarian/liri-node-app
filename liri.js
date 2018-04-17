require("dotenv").config();
var Twitter = require('twitter');
// var Spotify = require('node-spotify-api');
// var request = require('request');
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var userInput = process.argv[2]

if (userInput === "my-tweets") {
    client.get('statuses/user_timeline.json?&count=2', function(error, tweets, response) {
        if(error) throw error;
        console.log(tweets);  // The favorites. 
        console.log(response);  // Raw response object. 
        console.log(JSON.stringify(tweets, null, 2));
    });
}






// .then(function(user){
//     if (user.name === "Karen") {
//         console.log(" Sorry " + user.name + "." + "That is an incorrect password.")
//     } else {
//         console.log("Your pizza size is "  + user.pizzaSize);
//     }
// })

// 9. Add the code required to import the `keys.js` file and store it in a variable.
  
// * You should then be able to access your keys information like so

//   ```js
//   var spotify = new Spotify(keys.spotify);
//   var client = new Twitter(keys.twitter);
// 

// 10. Make it so liri.js can take in one of the following commands:

//     * `my-tweets`

//     * `spotify-this-song`

//     * `movie-this`

//     * `do-what-it-says`