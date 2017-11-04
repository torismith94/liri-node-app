//Requiring Twitter constructor function we exported from keys.js
var twitterKeys = require("./keys");
//Requiring NPM Twitter Package
var action = process.argv[2];
var input = process.argv[3];

if (action === "my-tweets") {
var twit = require('twitter');
var Twitter = new twit(twitterKeys);

var params = {screen_name: 'NotNotDwight'};

Twitter.get('statuses/user_timeline', params, function(error, tweets, response) {

  	for (var i = 0; (i < tweets.length) && (i < 20); i++) {
  	console.log(tweets[i].text);
	
  }
});
}
//Movie OMDB data 

if (action === "movie-this") {
    if (input === "" || " ") {
        var request = require('request');
        var movieURL = "https://www.omdbapi.com/?t=" + "Mr. Nobody" + "&y=&plot=short&apikey=40e9cece";
        request(movieURL, function(error, response, movie) {
            var movieData = JSON.parse(movie);
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log(JSON.stringify(movieData, null, 4));
        });
    } else {
        var request = require('request');
        var movieURL = "https://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=40e9cece";
        request(movieURL, function(error, response, movie) {
            var movieData = JSON.parse(movie);
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log(JSON.stringify(movieData, null, 4));
        });
    }
}
//
// var movieNameTokens = process.argv.slice(3);
// var movieName = movieNameTokens.join('+');



if (action === 'spotify-this-song') {
var Spotify = require('node-spotify-api');
var spotify = new Spotify ({
  id: a2d09b9516b14addac18e1b9ed01b9e5,
  secret: c5492176a72241f7a09af72b2c884488
});
var userSearch = function (title)
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});
}



