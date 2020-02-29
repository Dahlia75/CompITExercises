const oneLinerJoke = require('one-liner-joke');

var getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke);

var getRandomJokeWithTag = oneLinerJoke.getRandomJokeWithTag('IT');
console.log(getRandomJokeWithTag);