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
// var songName = "+The+Sign";
// var movieName = "+Mr.+Nobody";
var unitName = "Thriller";

function prepUserRequest (parameter){
    for (var i = 3; i < parameter.length; i++){
        console.log(parameter);
        if (i > 3 && i < parameter.length ) {
            unitName = unitName + "+" + parameter[i];
            // console.log(userRequest);
            console.log(unitName);
            return unitName
        }
    }
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
        } else{
            console.log(JSON.stringify(data));
            // console.log(data.track);
        }
    });
};

function movieData(parameter) {
    var params = {
        apiKey: 'trilogy',
        title: movieName,
    
    }
    omdbApi.get(params, function(err, data) {
        console.log(data);
    });
};

function doData () {
    fs.readFile("./random.txt", 'utf8', function (error, data){
        var data = JSON.parse(data);
        console.log(data);
        userRequest = data.text;
        spotifyData(userRequest);
        
    });
};

switch (userInput){
    case 'spotify-this-song':
    prepUserRequest(userRequest);
    spotifyData(unitName);
    break;

    case 'my-tweets':
    twitterData();
    break;

    case 'movie-this':
    prepUserRequest(userRequest);
    movieData(unitName);
    break;

    case 'do-what-it-says':
    doData();

}






