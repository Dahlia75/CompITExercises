// console.log('Welcome to JavaScript and Node.js server side');
// var firstname = 'Ciro';
// var lastname = 'Rodriguez';
// var age = 20;

// console.log(firstname);
// console.log(lastname);
// console.log(age);

const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('<h1>Hello World</h1>')
})
 
app.listen(3000)