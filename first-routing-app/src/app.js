// import routes (put this near top)
const indexRouter = require('./routes/index.js');
const quotesRouter = require('./routes/quotes.js')
const complainRouter = require('./routes/complain.js')
const apiRouter = require("./routes/api.js")


const express = require('express'); // import Express in our file

const port = 3000;

const app = express();

const path = require('path');
const filePath404Page = path.resolve(__dirname,'../client/404.html');

// put this AFTER we instantiate `app`, and BEFORE our GET and POST routes
app.use(express.static('client'));

// use routes (put this near the bottom, BEFORE app.listen()
app.use('/', indexRouter)

app.use('/bye', indexRouter)

app.use('/quotes', quotesRouter)

app.use('/complain', complainRouter)

app.use('/api', apiRouter)





// // .all refers to ALL http methods - GET, POST, DELETE etc
// // note .status(404) and method chaining
// // .status(404) is how we send the 404 - File Not Found status code
// // app.all('*', (req, res) => {
// //     res.status(404).send('<h1>404! Page not found</h1>');
// //   });
    
// // show 404 file not found message
// app.all('*', (req, res) => {
//     res.status(404).sendFile(filePath404Page);
//   });



// this is the LAST route, right before app.listen()
app.use((req, res, next) => {
  res.status(404).sendFile(filePath404Page);
})

// listen for connections on specified host and port
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

