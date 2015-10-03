Create a simple HTTP server using node. *  
This server should respond to a root-url request with a file called index.html. 
Do not use Express.js. Your code should have error checking and at least one callback. 
Put five or more html elements in your index.html. 
One of the elements should be a link to an external page. 
Things to research: node.js, callbacks, the fs module, the http module.

Note: What is a callback?
A callback is a function that is called by another function which takes that first function as a parameter.
A callback can be a function that is called when something (such as an event) happens.
A callback allows other things to happen while we are waiting for the event to occur, 
notifies us when it does, and then executes the first function.
The callback function is not executed immediately. 
It is “called back” (hence the name) at some specified point inside the containing function’s body.

ETA: After following along with the examples in Chapter 20 of Eloquent JS, I had a working file server, which I have included
in this repo.
