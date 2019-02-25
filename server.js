//Dependencies

var fs = require('fs');
var express = require("express");
var path = require("path");
// var apiRoutes = require("./app/routing/apiRoutes");
// var htmlRoutes = require("./app/routing/htmlRoutes");
// var friends = require("./app/data/friends");
var bodyParser = require('body-parser');

// var friends = require('./data/friends.js');


//Express app
var app = express();
var PORT = process.env.PORT || 3000;


// Middleware to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//person Data
var friends = [
    {
        "name": "John Smith",
        "photo": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F236230%2Fpexels-photo-236230.jpeg%3Fcs%3Dsrgb%26dl%3Dadorable-animals-cats-236230.jpg%26fm%3Djpg&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fanimals%2F&docid=zojVvzMoZDdNKM&tbnid=9D2l0BH5aQAoFM%3A&vet=10ahUKEwiVj_vE0rLgAhUQnq0KHd5tCTQQMwhoKAEwAQ..i&w=3965&h=2419&bih=938&biw=1920&q=photos%20of%20animals&ved=0ahUKEwiVj_vE0rLgAhUQnq0KHd5tCTQQMwhoKAEwAQ&iact=mrc&uact=8",
        "scores": [
            3,
            2,
            4,
            2,
            4,
            4,
            7,
            2,
            5,
            3,
        ]
    },

    {
        "name": "Joann Dyer",
        "photo": "https://www.google.com/imgres?imgurl=http%3A%2F%2Fmymodernmet.com%2Fwp%2Fwp-content%2Fuploads%2F2017%2F01%2Fanimal-selfies-thumbnail.jpg&imgrefurl=https%3A%2F%2Fmymodernmet.com%2Fbest-animal-selfies%2F&docid=lcyGQWQJ2kysyM&tbnid=UP2LLM6S1ijCaM%3A&vet=10ahUKEwiVj_vE0rLgAhUQnq0KHd5tCTQQMwhxKAowCg..i&w=1200&h=628&bih=938&biw=1920&q=photos%20of%20animals&ved=0ahUKEwiVj_vE0rLgAhUQnq0KHd5tCTQQMwhxKAowCg&iact=mrc&uact=8",
        "scores": [
            3,
            4,
            5,
            5,
            3,
            2,
            1,
            3,
            5,
            1,
        ]
    },

    {
        "name": "Jean Pepper",
        "photo": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F378800000851647346%2F134bd91486fb1f3dcaf9a94929d08580.jpeg&imgrefurl=https%3A%2F%2Ftwitter.com%2Fanimalsofmt&docid=MOExv6UGuusfsM&tbnid=6WINkv2HdkZuMM%3A&vet=10ahUKEwi2iYji07LgAhUDOawKHZXSBxgQMwhtKAYwBg..i&w=256&h=256&bih=938&biw=1920&q=photos%20of%20animals&ved=0ahUKEwi2iYji07LgAhUDOawKHZXSBxgQMwhtKAYwBg&iact=mrc&uact=8",
        "scores": [
            5,
            3,
            1,
            1,
            3,
            4,
            1,
            3,
            4,
            5,
        ]
    },

    {
        "name": "Brian Harris",
        "photo": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fshawglobalnews.files.wordpress.com%2F2015%2F10%2Fla501-92_2015_173847_high.jpg%3Fquality%3D70%26strip%3Dall%26w%3D256&imgrefurl=https%3A%2F%2Fglobalnews.ca%2Ftag%2Fadorable-animals%2F&docid=QuPI7iLEBD6t9M&tbnid=BICAR3KvtYtC4M%3A&vet=10ahUKEwi2iYji07LgAhUDOawKHZXSBxgQMwiKASgWMBY..i&w=256&h=256&bih=938&biw=1920&q=photos%20of%20animals&ved=0ahUKEwi2iYji07LgAhUDOawKHZXSBxgQMwiKASgWMBY&iact=mrc&uact=8",
        "scores": [
            2,
            3,
            4,
            1,
            1,
            3,
            4,
            2,
            5,
            3,
        ]
    },

    {
        "name": "Betty Gold",
        "photo": "https://www.google.com/imgres?imgurl=http%3A%2F%2Fpa1.narvii.com%2F6699%2F1037669405235ec31af7e472ab8c387bde8e0707_00.gif&imgrefurl=https%3A%2F%2Faminoapps.com%2Fc%2Fart%2Fpage%2Fblog%2Fendangered-animal-challenge%2FJYhd_uPw8rVPNaaKoYjM6xn3wqmvaa&docid=28Igr1DpjTEntM&tbnid=nuVtEKB1TFce1M%3A&vet=10ahUKEwi2iYji07LgAhUDOawKHZXSBxgQMwibASgnMCc..i&w=256&h=256&bih=938&biw=1920&q=photos%20of%20animals&ved=0ahUKEwi2iYji07LgAhUDOawKHZXSBxgQMwibASgnMCc&iact=mrc&uact=8",
        "scores": [
            3,
            4,
            5,
            1,
            1,
            2,
            2,
            3,
            5,
            2,
        ]
    }];


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



// GET request to display JSON of all possible friends
app.get('/api/friends', function (req, res) {
    res.json('friends');
})

//route new friend on server

app.post("api/friends", function (req, res) {
    var newfriend = req.body;
    console.log(newfriend);
    friends.push(newfriend);
    res.join(newfriend);

});


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
