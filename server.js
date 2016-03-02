
//Original simple server code for FSJS Code Challenge

//http module (provides functionality for running HTTP servers and making HTTP requests) 
var http = require('http');
//fs(file system) module (provides functions for working with files and directories)
var fs = require('fs');
//error checking
function send404Response(response) {
  response.writeHead(404, {'Content-Type': 'text/plain'});
  response.write("Error 404: Page not found");
  response.end();
}

//request
function onRequest(request, response) {
  if (request.method === 'GET' && request.url === '/') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream('./index.html').pipe(response);
  } else {
    send404Response(response);
  }
}

http.createServer(onRequest).listen(9000);
console.log("Server is now running.");
