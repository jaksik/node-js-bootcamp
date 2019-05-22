// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");

var movie = "the+matrix"

// Then run a request with axios to the OMDB API with the movie specified
axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=c6b8f6cd").then(
  function(response) {
    console.log("The movie's rating is: " + response.data.imdbRating);
  }
);
