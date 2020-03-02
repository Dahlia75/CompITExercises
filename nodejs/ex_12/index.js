// Create a Express web server using port 3000
// Create the following routes:
// GET '/api/products': send the following object as JSON
// {
//   description: 'Products',
//   items: [
//     { name: 'Star Wars jacket' , price: 100},
//     { name: 'FIFA 22 PS4' , price: 79},
//     { name: 'Superheore t-shirt' , price: 10},
//     { name: 'Jets game shirt' , price: 200},
//     { name: 'Large Meat lovers pizza' , price: 12},
//     { name: 'Canada Dry  bottle' , price: 2}
//   ]
// }


const express = require('express');
const Logger = require('logplease');

const app = express();
const logger = Logger.create('server');

const port = 3000;

app.get('/', (req, res) => {
    res.send("Welcome to Express Exercise 12");
});

app.get('/api/products', (req, res) => {
    res.json({
        description: 'Products',
        items: [
          { name: 'Star Wars jacket' , price: 100},
          { name: 'FIFA 22 PS4' , price: 79},
          { name: 'Superheore t-shirt' , price: 10},
          { name: 'Jets game shirt' , price: 200},
          { name: 'Large Meat lovers pizza' , price: 12},
          { name: 'Canada Dry  bottle' , price: 2}
        ]
      });
});

app.listen(port, (err) => {
    if (err){
        return logger.error('Unable to start the server on port %s', port);
    } else {
        logger.info('This HTTP server is running on port %s', port);
    }
});