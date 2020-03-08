// Create a route handler
// This router will handle the GET HTTP method
// The response will send the following message:
// This is my Home page using Express Router

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('This is my Home page using Express Router');
});

module.exports = router;