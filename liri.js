require("dotenv").config();
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var omdbApi = require('omdb-client');
var fs = require('fs');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
// var request = require('request');
var userInput = process.argv[2];
var userRequest = process.argv;
var songName = "+The+Sign";
// var movieName = "+Mr.+Nobody";
// var mediaName = userRequest.slice(3).join("+");
var mediaName;
// console.log("Media name is " + mediaName);
// var unitName = "Thriller";

if ( userInput ==="spotify-this-song" && userRequest.length < 4 ){
    mediaName = "The+Sign+Ace+of+Base";
} else {
    mediaName = userRequest.slice(3).join("+");
};
// console.log("This is our mediaName" + mediaName);

if ( userInput ==="movie-this" && userRequest.length < 4 ){
    mediaName = "Mr.+Nobody";
} else {
    mediaName = userRequest.slice(3).join("+");
};



function twitterData () {
    client.get('statuses/user_timeline', function(error, tweets, response) {
        for (var i=0; i < 3 ; i++) {
                if(error) throw error;
                console.log(tweets[i].created_at);
                console.log(tweets[i].text); 
        }; 
    });
}


function spotifyData(parameter) {
    console.log(parameter);
    
    spotify.search({ type: 'track', query: parameter }, function(err, data) {
        if ( err ) {
            console.log('Error occurred: ' + err);
            return;
        } else {
        
            
            //console.log(JSON.stringify(data));
            //console.log(data.tracks);
            // console.log((data.tracks.items[0]));
            // console.log(data.tracks.items[0].album.artists[0].name)
            console.log(`
                Artists: ${data.tracks.items[0].album.artists[0].name}
                Album: ${data.tracks.items[0].album.name} 
                Link: ${data.tracks.items[0].external_urls.spotify}
                `);

            
        }
    });
};

function movieData(parameter) {
    var params = {
        apiKey: 'trilogy',
        title: mediaName,
    
    }
    omdbApi.get(params, function(err, data) {
        // console.log(data);
        // console.log(data.Title, data.Year, data.imdbRating, data.Ratings[1].Source, data.Country);
        console.log(`   Title: ${data.Title}
                        Year: ${data.Year}
                        IMDB Rating: ${data.imdbRating}
                        Rotten Tomatos: ${data.Ratings[1].Value}
                        Country: ${data.Country}
                        Plot: ${data.Plot}
                        Actors: ${data.Actors}`);
        

    });
};

function doData () {
    fs.readFile("./random.txt", 'utf8', function (error, data){
        // var data = JSON.parse(data);
        console.log("File data: " + data);
        var fileData = data.split(",");
        var functionCall = fileData[0];
        var textMediaName = fileData[1];
        console.log("This is textMediaName" + textMediaName);
        console.log(functionCall);
        if (functionCall === "spotify-this-song") {
            spotifyData(textMediaName);
        }
        
        // userRequest = data.text;
        // spotifyData(userRequest);
        
    });
};

switch (userInput){
    case 'spotify-this-song':
    // prepUserRequest(userRequest);
    spotifyData(mediaName);
    break;

    case 'my-tweets':
    twitterData();
    break;

    case 'movie-this':
    // prepUserRequest(userRequest);
    movieData(mediaName);
    break;

    case 'do-what-it-says':
    doData();

}

//If someone doesn't enter a song title or movie title, then 
//I would need some code (see below) to see if the parameter/

if (userRequest === undefined || userRequest === null && userInput==="spotify-this-song"){
        mediaName = "+The+Sign";
} else {
    mediaName = userRequest.slice(3).join("+");
};



