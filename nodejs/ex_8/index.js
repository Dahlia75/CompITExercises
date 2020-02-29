// Create an HTTP web server using port 3001
// Execute an HTTP request to the server using the browser
// The server will send the following text as response:
// Congrats you're using your first Node.js Web Server
// When the server starts it needs to show the following message:
// This HTTP server is running on port %port%
// In case there's an error show the following message:
// Unable to start the server on port %port%

const http = require('http');
const port = 3001;

const requestHandler = (request, response) => {  
    console.log(request.url);
    response.end("<h1>Congrats you're using your first Node.js Web Server</h1>");
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {  
if (err) {
    return console.log('Unable to start the server on port %s', err);
}
    console.log(`This HTTP server is running on port ${port}`);
})