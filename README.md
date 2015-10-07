Create a simple HTTP server using node. *  
This server should respond to a root-url request with a file called index.html. 
Do not use Express.js. Your code should have error checking and at least one callback. 
Put five or more html elements in your index.html. 
One of the elements should be a link to an external page. 
Things to research: node.js, callbacks, the fs module, the http module.

Notes: What is a callback?
A callback is a function that is called by another function which takes that first function as a parameter.
A callback can be a function that is called when something (such as an event) happens.
A callback allows other things to happen while we are waiting for the event to occur, 
notifies us when it does, and then executes the first function.
The callback function is not necessarily executed immediately. 
It is “called back” (hence the name) at some specified point inside the containing function’s body.

Node.js - a server-side environment based on V8. Contains a built-in library that allows applications to act
as a web server without additional software (like Apache.) Node is non-blocking and uses callbacks to signal completion.

The fs module - File System Module (available in Node via npm, or Node Package Mangaer): 
a set of API functions available to access files and directories.
Allows streaming of readable content by passing in the file path. (Request/response or I/O)
Request is readable, response is writable.
All queries require callbacks.
Always takes a callback as its last argument.

The http module - Provides functionality for running HTTP servers and making HTTP requests.
Also allows the streaming of data. 
Node's http API is very low level, and deals with stream handling and message parsing only.
Can also act as an http client using the request function.

ETA: After following along with the examples in Chapter 20 of Eloquent JS, I had a working file server, which I have included
in this repo.
