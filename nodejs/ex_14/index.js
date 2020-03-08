// Create an Express web server using port 3000
// Create the following routes:
// GET '/': Return index.html with a 200 status
// GET '/products': Return the following message with a 500 status
// Server error, please try it later
// GET '/users': Return 404.html document with 404 status

const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'index.html'));
});

app.use('/assets', express.static('public'));

app.get('/products', (req, res) => {
    res.status(500).send('Server error, please try it later');
});

app.get('/user', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(port, ()=> console.log(`Server listen to port ${port}`));
