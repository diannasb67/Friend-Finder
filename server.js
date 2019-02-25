//Dependencies

var fs = require('fs');
var express = require("express");
var path = require("path");
// var apiRoutes = require("./app/routing/apiRoutes");
// var htmlRoutes = require("./app/routing/htmlRoutes");
var friends = require("./app/data/friends");
var bodyParser = require('body-parser');

// var friends = require('./data/friends.js');


//Express app
var app = express();
var PORT = process.env.PORT || 3000;


// Middleware to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Routes lets user to find page

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
})

app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
})

app.listen(3000, function () {
    console.log("Listening");
})


// POST request handle incoming survey results.  
app.post('/api/friends', function (req, res) {
    var newfriends = req.body;
    console.log(newfriends);
    friends.push(newfriends);
    res.json(friends);
});

// page not found
app.get('*', function (req, res) {
    res.send(404);
});
