var path = require("path");


//Home - redirects user to home page
app.get('/', function (req, res) {
    // res.send("welcome to the home page");
    res.sendFile(path.join(__dirname, "home.html"));
});

//Directs user to Survey Page
app.get('/survey', function (req, res) {
    // res.send("welcome to the Reserve page");
    res.sendFile(path.join(__dirname, "survey.html"));
});


// Display Scores
app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

module.exports = htmlRoutes;