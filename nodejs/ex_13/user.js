// Create a route handler
// This router will handle the following HTTP methods and responde the corresponding texts
// GET: Please log to get a user
// POST: Please log to create a user
// PUT: Please log to update a user
// DELETE: Please log to delete a user

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('Please log to get a user');
});
router.post('/', (req, res) => {
    res.send('Please log to create a user');
});
router.put('/', (req, res) => {
    res.send('Please log to update a user');
});


router.delete('/', (req, res) => {
    res.send('Please log to delete a user');
});

module.exports = router;