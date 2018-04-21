### liri-node-app

### Overview
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

### What Each Command Should Do

`node liri.js my-tweets`
This will show your last 20 tweets and when they were created at in your terminal/bash window.

`node liri.js spotify-this-song '<song name here>'`

This will show the following information about the song in your terminal/bash window:  
     * Artist(s)
     * The song's name
     * A preview link of the song from Spotify
     * The album that the song is from
      * If no song is provided then your program will default to "The Sign" by Ace of Base.

`node liri.js movie-this '<movie name here>'`

  This will output the following information to your terminal/bash window:
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
       *If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.
  
  `node liri.js do-what-it-says`
  
       * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
   


###What you need to know

This app is meant to be run in the command line. Please download Visual Studio or other text editor. Download the files from this GitHub repository and open them in a folder in your text editor. You will need install the dependencies (see the package.json file to see what those are) and you'll need to create a JavaScript file called .env that has your twitter and spotify keys in it. 

Your .env javascript file should look like this, except for your keys replacing the values with your API keys (no quotes) once you have them:

```js
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

# Twitter API keys

TWITTER_CONSUMER_KEY=your-twitter-consumer-key
TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
TWITTER_ACCESS_TOKEN_KEY=your-access-token-key
TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret

```

* This file will be used by the `dotenv` package to set what are known as environment variables to the global `process.env` object in node. These are values that are meant to be specific to the computer that node is running on.
