var friendData = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });


  app.post("/api/friends", function(req, res) {
    
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

    console.log("req.body: ", req.body);

    var userData = req.body;
    var userScores = userData.scores;

    var totalDifference = 0;

    for (var i=0; i < friendData.length; i++) {

      totalDifference = 0;

      for (var j=0; j < friendData[i].scores[j]; j++){
        totalDifference+= Math.abs(parseInt(userScores[j]) - parseInt(friendData[i].scores[j]));

        if (totalDifference <= bestMatch.friendDifference) {

          bestMatch.name = friendData[i].name;
          bestMatch.photo = friendData[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
    }

    friendData.push(userData);
    console.log(bestMatch);
    res.json(bestMatch);
  });


  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data

    res.json({ ok: true });
  });
};
