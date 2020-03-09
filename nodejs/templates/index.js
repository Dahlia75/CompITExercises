const express = require('express');
const port = 3000;
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.listen(port);
