// console.log('Welcome to JavaScript and Node.js server side');
// var firstname = 'Ciro';
// var lastname = 'Rodriguez';
// var age = 20;

// console.log(firstname);
// console.log(lastname);
// console.log(age);

// const express = require('express')
// const app = express()

const getPrice = require('./math');
const price = getPrice(200);

console.log(price);

// app.get('/', function (req, res) {
//   res.send('<h1>Hello World</h1>')
// })
 
// app.listen(3000)

// const calc = require('./calculater')
// let rsult = calc.sum(2, 3)
// console.log(`The result is: ${rsult}`);