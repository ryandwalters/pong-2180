const express = require("express");
const bodyParser = require("body-parser");
//const mongoose = require("mongoose");
//const articleController = require("./controllers/articleController");
const app = express();
//require('dotenv').config();
//const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
//app.use(express.static("client/build"));
// Add routes, both API and view

//app.use(articleController);

//var MONGODB_URI = 'DB_PASS';
// Set up promises with mongoose
/*
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/",
  
);
*/

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
app.get('/', function(req, res) {

})

app.get('/main1', function(req, res) {
  
})

app.get('/login', function(req, res) {
  
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
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});