// Create a Express web server using port 3000
// Configure express static folder to use the public folder
// Create an assets alias

const express = require('express');
const path = require('path');
const port = 3000;
const app = express();

//app.use(express.static('public'));
app.use('/assets', express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
});

app.listen(port, ()=> console.log(`Server listening to port ${port}`));