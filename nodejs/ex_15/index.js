// Create a Express web server using port 3000
// Create the following routes:
// GET '/': Returns the following JSON object
// {
//   "status": 200,
//   "message": "Este request/response está OK"
// }
// Create the following middleware:
// Configure express to use the requestTime middleware
// You should see the following output on each request (Server console):
// Request 1506002876731

const express = require('express');
const app = express();
const port = 3000;

const requestTime = (req, res, next) => {
  const message = `Request: ${req.baseUrl} ${Date.now()}`;
  console.log(message);
  
  next();
};

app.use(requestTime);

app.get('/', (req, res)=> {
    res.status(200).json({
        "status": 200,
        "message": "Este request/response está OK"
    })
})
app.listen(port, ()=> console.log(`Server listen to ${port}`));
