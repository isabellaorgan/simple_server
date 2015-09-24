//Trying updated design patterns via Eloquent JS


//http module (provides functionality for running HTTP servers and making HTTP requests) 
var http = require('http');
//fs(file system) module (provides functions for working with files and directories)
var fs = require('fs');

var methods = Object.create(null);
//the function passed as an argument to createServer is called every time a client tries to connect to the server.
//request and response represent incoming and outgoing data (I/O)
http.createServer(function(request, response) {
//the respond function acts a callback to finish the request
  function respond(code, body, type) {
    if (!type) type = "text/plain";
    response.writeHead(code, {"Content-Type": type});
    if (body && body.pipe)
      body.pipe(response);
    else
      response.end(body);
  }
  if (request.method in methods)
    methods[request.method](urlToPath(request.url),
                            respond, request);
  else respond(405, "Method " + request.method +
              " not allowed.");
}).listen(9000);

function urlToPath(url) {
  var path = require("url").parse(url).pathname;
  return "." + decodeURIComponent(path);
}

methods.GET = function(path, respond) {
  fs.stat(path, function(error, stats) {
    if (error && error.code === "ENOENT")
      respond(404, "File not found");
    else if (error)
      respond(500, error.toString());
    else if (stats.isDirectory())
      fs.readdir(path, function(error, files) {
        if (error)
          respond(500, error.toString());
        else
          respond(200, files.join("\n"));
      });
    else
      respond(200, fs.createReadStream(path),
              require("mime").lookup(path));
  });
};

methods.DELETE = function(path, respond) {
  fs.stat(path, function(error, stats) {
    if (error && error.code === "ENOENT")
      respond(204);
    else if (error)
      respond(500, error.toString());
    else if (stats.isDirectory())
      fs.rmdir(path, respondErrorOrNothing(respond));
    else
      fs.unlink(path, respondErrorOrNothing(respond));
  });
};

methods.PUT = function(path, respond, request) {
  var outStream = fs.createWriteStream(path);
  outStream.on("error", function(error) {
    respond(500, error.toString());
  });
  outStream.on("finish", function() {
    respond(204);
  });
  request.pipe(outStream);
};

// //error checking
// function send404Response(response) {
// 	response.writeHead(404, {'Content-Type': 'text/plain'});
// 	response.write("Error 404: Page not found");
// 	response.end();
// }


// //request
// function onRequest(request, response) {

// 	if (request.method === 'GET' && request.url === '/') {
// 		response.writeHead(200, {'Content-Type': 'text/html'});
// 		fs.createReadStream('./index.html').pipe(response);
// 	} else {
// 		send404Response(response);
// 	}
// }

// http.createServer(onRequest).listen(9000);
// console.log("Server is now running.");
