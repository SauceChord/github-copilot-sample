// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

// Create comments object
var comments = [
    { id: 1, author: "John", text: "Hello World" },
    { id: 2, author: "Doe", text: "Hello Universe" }
];

// Create API
app.get('/comments', function(req, res) {
    res.json(comments);
});

app.post('/comments', function(req, res) {
    var comment = req.body;
    comments.push(comment);
    res.json(comment);
});
