var path = require("path");


module.exports = function (app) {

    app.get("/", function (req, res) {
        var hbsObject = {
            
        };
        res.render("index", hbsObject);
    });

};
