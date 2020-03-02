// Create a Express web server using port 3000
// Create the following route handlers and send the corresponding response back
// Routes:
// GET /: show a welcome message
// GET jokes: show at least 2 jokes
// GET joke: show 1 joke
// POST joke: my jokes are too funny, I'm not getting new ones from you..
// PUT joke: no, no, no.. not changing my act dude!
// DELETE: joke: good jokes never get to old
// All: joke: I know I'm so good that you're looking for jokes everywhere
// Use Postman to try all this options
// You can use one-liner-joke module to create the jokes

const express = require('express');
const Logger = require('logplease');
const oneLinerJoke = require('one-liner-joke');
const app = express();
const logger = Logger.create('server');

const port = 3000;

app.get('/', (req, res) => {
    res.send("Welcome to Express exercise 10 ");
});

app.get('/jokes', (req, res) => {
    var getRandomJoke = oneLinerJoke.getRandomJoke();
    //var getRandomJoke2 = oneLinerJoke.getRandomJoke();

    res.send(getRandomJoke.body);  
});

app.get('/joke', (req, res) => {
    var getRandomJoke = oneLinerJoke.getRandomJoke();
    res.send(getRandomJoke.body);  
});

app.post('/joke', (req, res) => {
    res.send("my jokes are too funny, I'm not getting new ones from you..");  
});

app.put('/joke', (req, res) => {
    res.send("no, no, no.. not changing my act dude!");  
});

app.delete('/joke', (req, res) => {
    res.send("joke: good jokes never get to old");  
});

app.all('/joke', (req, res) => {
    res.send("I know I'm so good that you're looking for jokes everywhere");  
});

app.listen(port, (err) => {
    if (err){
        return logger.error('Unable to start the server on port %s', port);
    } else {
        logger.info('This HTTP server is running on port %s', port);
    }
});