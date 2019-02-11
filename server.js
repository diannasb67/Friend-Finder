//Dependencies

var express = require("express");
var path = require("path");

//Express app
var app = express();
var PORT = process.env.PORT || 3000;


// Middleware to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//person Data


//Routes

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
})

app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
})

app.listen(3000, function () {
    console.log("Listening");
})








