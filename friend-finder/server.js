var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true}));

app.use(bodyParser.json({ type: "application/*+json" }))

app.use(bodyParser.raw({ type: "application/vnd.custom-type" }))

app.use(bodyParser.text({ type: "text/html" }))

require("./app/routing/api-routes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});



//================================================================
// var array = ["inception", "batman", "interstellar"];

// app.get("/", function(req, res) {
//     console.log("THis route hit")
//     res.sendStatus(200);
//     res.send("Hello")
// })

// app.get("/movies", function(req, res) {
//     console.log("movies hit")
//     res.json({movies: array});
// })

// app.post("/movies", function(req, res) {
//     var browserData = req.body
//     console.log("Hit post")
//     console.log(req.body.routeName)
//     // res.json(req.body)
//     // res.send("Name: " + browserData.name + "Age: " + browserData.age)
//     array.push(browserData.title)
//     res.json({movies: array});
//     console.log(array)

// })