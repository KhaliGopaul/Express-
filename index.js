// import exprss library
import express from 'express';

// initialize express server
const app = express();

// List requests that we want express to respond to 
app.get("/hello", (request, response) => {
// do something
response.send('Hello World!');
}) 


// start listening on a port
app.listen(3001, () => {
console.log("Now Listening on port 3001");
});