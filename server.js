//
//
const express = require("express");
const bodyParser = require("body-parser");
//const routes = require("./routes");
const app = express();
const morgan = require('morgan');

//require('dotenv').config();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
//app.use(express.static("client/build"));

// Add routes, both API and view

//app.use(articleController);


/*
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function (error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function () {
  console.log("Mongoose connection successful.");
});

*/

app.post('/login', (req, res) => {
  //trying to log in
  console.log('hit login post');
  res, send({
    code: 204
  });
})

app.get('/', function (req, res) {
  res.json(JSON.parse(response.body));
})

app.get('/main1', function (req, res) {
  res.json(JSON.parse(response.body));
})

app.get('/login', function (req, res) {
  res.json(JSON.parse(response.body));
})

//if running on a deployed site use the build folder
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
// If no API routes are hit, send the React app
/*router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});*/

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});