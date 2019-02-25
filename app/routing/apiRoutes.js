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

module.exports = apiRoutes;