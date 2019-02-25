//GET request to display JSON of all possible friends
app.get('/api/friends', function (req, res) {
    res.json('friends');
})

// POST request handle incoming survey results.  
app.post('/api/friends', function (req, res) {
    var newfriends = req.body.friends;
    console.log(newfriends);
    friends.push(newfriends);
    res.json(friends);
});

module.exports = apiRoutes;