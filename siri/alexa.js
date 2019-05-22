//=======REQUIRES========================================================
require("dotenv").config();
var fs = require("fs");
var axios = require("axios");
var inquirer = require("inquirer");
const util = require('util');

//=======USER INPUT=====================================
var input = process.argv;
var inputOne = input[2];
var inputTwo = input[3];
//============SPOTIFY LOGISTICS=======
var Spotify = require("node-spotify-api");
var keys = require("./keys");
var spotify = new Spotify(keys.spotify);
//==========================================
var concerts = axios
.get("https://rest.bandsintown.com/artists/" + artistResponse.artist + "?app_id=codingbootcamp")
.then(function (response) {
  console.log("Artist: " + response.data.name);
  console.log("Upcoming Events: " + response.data.upcoming_event_count);
});
var movies = ;
//=========================================

inquirer
  .prompt([
    {
      type: "list",
      message: "What would you like to search for?",
      choices: ["concerts", "songs", "movies", "do-what-it-says", "reccomendations"],
      name: "options"
    }
  ])
  //=======================CONCERT SEARCH===CONCERT SEARCH===========================================================================================================================================
  .then(function (response) {
    if (response.options === "concerts") {
      console.log("you chose concerts");
      inquirer
        .prompt([
          {
            type: "input",
            message: "What artist would you like to search for?",
            name: "artist"
          }
        ])
        .then(function (artistResponse) {
          console.log("You searched for: " + artistResponse.artist)
          
        });
      //===================SPOTIFY SONG SEARCH====SPOTIFY SONG SEARCH=========================================================================================================================================
    } else if (response.options === "songs") {
      console.log("You chose songs");
      inquirer
        .prompt([
          {
            type: "input",
            message: "What song would you like to search for?",
            name: "song"
          }
        ])
        .then(function (songResponse) {
          console.log("You searched for: " + songResponse.song)
          spotify.search({ type: 'track', query: songResponse.song }, function (err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            } else {
              console.log("Artist: ", data.tracks.items[0].album.artists[0].name);
              console.log("Song: ", data.tracks.items[0].name);
              console.log("Preview URL: ", data.tracks.items[0].preview_url);
            }
          });
        });
      //====================MOVIE SEARCH===MOVIE SEARCH======================================================================================================================================================
    } else if (response.options === "movies") {
      inquirer
        .prompt([
          {
            type: "input",
            message: "What movie would you like to search for?",
            name: "movie"
          }
        ])
        .then(function (movieResponse) {
          axios.get("http://www.omdbapi.com/?t=" + movieResponse.movie + "&y=&plot=short&apikey=c6b8f6cd").then(
            function (response) {
              console.log("Movie: ", response.data.Title);
              console.log("Release Year: ", response.data.Year);
              console.log("IMDB Rating: ", response.data.imdbRating);
              console.log("Rotten Tomatoes Rating: ", response.data.Ratings[1].Value);
              console.log("Country of Production: ", response.data.Country);
              console.log("Language: ", response.data.Language);
              console.log("Movie Plot: ", response.data.Plot);
              console.log("Movie Actors: ", response.data.Actors);

            });
        });
      //========================================================================================================================================================================
    } else if (response.options === "do-what-it-says") {
      fs.readFile("random.txt", "utf8", function (err, data) {
        console.log(data);
      })
      //==============================================================================================================================================================
    } else if (response.options === "reccomendations") {
      inquirer
        .prompt([
          {
            type: "list",
            message: "What would you like a customized reccomendation for?",
            choices: ["concerts", "songs", "movies"],
            name: "recom"
          }
        ])
        .then(function (recomResponse) {
          console.log("You searched for: " + recomResponse.recom)
          if (recomResponse.recom === "concerts") {
            axios
            .get("https://rest.bandsintown.com/artists/u2?app_id=codingbootcamp")
            .then(function (response) {
              console.log("Artist: " + response.data.name);
              console.log("Upcoming Events: " + response.data.upcoming_event_count);
            })
          } else if (recomResponse.recom === "movies") {
            console.log("you chose movies")
          }
        });
    }
  });


