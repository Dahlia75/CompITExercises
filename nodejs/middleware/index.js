const express = require('express');
const app = express();

const myMiddleware = function(req, res, next) {
  // We set a new property in the request object
  req.someValue = 'This is a value to test the Middleware';
  
  // We call the next middleware
  next();
}

app.listen(3000);