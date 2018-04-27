//
//


configData = {
  mySQLforceRemote: true,
  gKeyOther: "AIzaSyAE03QBe5yDXRr1fzDvkWs9i_E_BIyCDhk",
  gKeyRich: "AIzaSyCrHKoPEISSoDAClePzcHVJVHB7G1-xb6s",
  firebaseStorage: "/games/user",         //prior to tacking on user number
  firebaseMainGame: "/games",
  firebaseStatusFolder: "/status",
  firebaseRefreshBit: "/status/refreshUsers",
  firebaseActive: true,
  isDemoMode: true,
  demoTimWin: 1.0,    //time window for demo
  demoNumHits: 0,     //number of hits 
  demoMaxNumHits: 2,
  demoAddrNum: 0,
  demoAddrArray: [
      '1801 Maple Ave. Evanston, IL 60208',
      '340 E. Superior St. Chicago, IL 60611',
      '6615 Roosevelt Rd, Berwyn, IL 60402',
      '233 S. Wacker Dr Chicago, IL 60606',
      '65 Dover Drive Des Plaines, IL 60018',
      '1200 W. Harrison St. Chicago, IL 60607',
      '1464 Industrial Dr. Itasca, IL 60143'
  ],
  isMovingPlayer: 0

};



const express = require("express");
const bodyParser = require("body-parser");
//const routes = require("./routes");
const app = express();
const morgan = require('morgan');
const mysql = require('mysql');
const connection = require('./app_server/connection.js');

//require('dotenv').config();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
//app.use(express.static("client/build"));

// Add routes, both API and view

//app.use(articleController);




/*  for fetch API  Access-Control-Allow-Origin  header  */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});


//turn on Morgan to show detailed routes thru server
app.use(morgan('dev'));


app.post('/login', (req, res) => {
  //trying to log in
  console.log('hit login post');
  console.log('login = ' + req.body.username );
  console.log('password = ' + req.body.password);

  //first check if it is an administrator
  var user_email_hash;
  var user_password_hash;
  var user_email;
  var user_password;


  var respondObj = {
    code: 0,
    errCode: 0,   //0 if no error
    errLine: 0,   //which line of the input form
    errrMsg: "", //error message
    errExp: "",   //error explanation
  };


  if (req.body.username === undefined || req.body.username === null || req.body.username === "") {
    //this is a blank email
    respondObj.code = 100;
    respondObj.errCode = 100;
    respondObj.errLine = 1;   //which line of the input form
    respondObj.errrMsg=  "Blank User Name"; //error message
    respondObj.errExp =  "The user name is blank or just spaces.";   //error explanation
    return res.send(respondObj);
  } else {
    //email has something in it
    user_email = req.body.username;
    user_email = user_email.trim();
    user_email_hash = loginMod.encrypt(user_email);
    if (req.body.password === undefined || req.body.password === null || req.body.password === "") {
      respondObj.code = 105;
      respondObj.errCode = 105;
      respondObj.errLine = 2;   //which line of the input form
      respondObj.errrMsg=  "Blank password"; //error message
      respondObj.errExp =  "The password is blank or just spaces.";   //error explanation
      return res.send(respondObj);
    } else {
      //somthing typed in .. check it out
      user_password = req.body.password;
      user_password = user_password.trim();


      var query = "SELECT * FROM administrators WHERE email_hash = ?";
      var emailEnc = loginMod.encrypt(user_email);
      connection.query(query, [emailEnc], function (err, response) {
        if (response.length == 0) {
          auditMod.writeAuditLog(connection, "Admin-bad", user_email, user_email, "code: 35" + " = " + "no such user", " ", " ");
          respondObj.code = 204;
          respondObj.errCode = 204;
          respondObj.errLine = 3;   //which line of the input form
          respondObj.errrMsg=  "No such administrator"; //error message
          respondObj.errExp =  "There is no nmatching username / password in the admin users password file";   //error explanation
          return res.send(respondObj);
        };
        bcrypt.compare(user_password, response[0].password_hash, function (err, result) {
          if (result == true) {
            //valid password
            console.log("password match for hard coded list");
            auditMod.writeAuditLog(connection, "Admin login", user_email, user_email, "code: 0" + " = " + "logged in", " ", " ");
            return dispAuditPage(res);
          } else {
            auditMod.writeAuditLog(connection, "Admin-bad", user_email, user_email, "code: 35" + " = " + "wrong password", " ", " ");
            console.log("no match from list");
            return res.render('../app/views/admin/login');
          };
        });
      });
    };
  };  

  res.send({
    code: 204
  });
})

//if running on a deployed site use the build folder
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// If no API routes are hit, send the React app
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './client/public/index.html'));
});

// router.use(function (req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});