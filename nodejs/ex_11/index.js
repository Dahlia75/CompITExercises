// Create a Express web server using port 3000
// Create the following routes:
// GET '/': send the index.html file
// GET '/products': send the products.html file

const express = require('express');
const Logger = require('logplease');
const path = require('path');

const app = express();
const logger = Logger.create('server');

const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'products.html'));
});

app.listen(port, (err) => {
    if (err){
        return logger.error('Unable to start the server on port %s', port);
    } else {
        logger.info('This HTTP server is running on port %s', port);
    }
});