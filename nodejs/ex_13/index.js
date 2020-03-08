// Create a Express web server using port 3000
// Mount the home router on '/'
// Mount the user router on '/users'

const express = require('express');
const app = express();
const port = 3000;

//Routers
const home = require('./home.js');
const user = require('./user.js');

app.use('/', home);
app.use('/user', user);

app.listen(port, () => {
    console.log('Router Example app listen to %s', port);
})