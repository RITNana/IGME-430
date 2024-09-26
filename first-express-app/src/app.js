const express = require('express'); // import Express in our file

const port = 3000;

const app = express();

const path = require('path');
const filePath404Page = path.resolve(__dirname,'../client/404.html');

// put this AFTER we instantiate `app`, and BEFORE our GET and POST routes
app.use(express.static('client'));

// what to do when a get request at the given route is called
app.get('/', (req, res) => {
  res.send('Hello world!'); // send the string to the requesting client
});

// add bye endpoint
app.get('/bye', (req, res) => {
    res.send('Goodbye!');
})

// add post endpoint 
app.post('/addComment', (req, res) => {
    res.send("You just called the postmethod at '/addComment'!\n")

})

// add /helloJSON endpoint
app.get('/helloJSON', (req, res) => {
    res.status(200).json({message: "Hello There!"})
})

// add /timeJSON endpoint
app.get('/timeJSON', (req, res) => {
    res.status(200).json({time: new Date().toLocaleTimeString()})
})

// .all refers to ALL http methods - GET, POST, DELETE etc
// note .status(404) and method chaining
// .status(404) is how we send the 404 - File Not Found status code
// app.all('*', (req, res) => {
//     res.status(404).send('<h1>404! Page not found</h1>');
//   });
    
// show 404 file not found message
app.all('*', (req, res) => {
    res.status(404).sendFile(filePath404Page);
  });


// listen for connections on specified host and port
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});