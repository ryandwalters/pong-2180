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
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const loginMod = require('./app_server/login-mod.js');
const auditMod = require('./app_server/auditLog-mod.js');
const path = require('path');


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
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});


//turn on Morgan to show detailed routes thru server
app.use(morgan('dev'));



app.post('/login2', (req, res) => {
  res.send({
    code: 204
  });
});



app.post('/login', (req, res) => {
  //trying to log in
  console.log('hit login post');
  console.log(req.body);
  console.log('login = ' + req.body.username);
  console.log('password = ' + req.body.password);

  //var recObj = JSON.parse(req.body);
  var _username = req.body.username;
  var _password = req.body.password;
  console.log('login #2 = ' + _username);
  console.log('password #2 = ' + _password);


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


  if (_username === undefined || _username === null || _username === "") {
    //this is a blank email
    respondObj.code = 101;
    respondObj.errCode = 101;
    respondObj.errLine = 1;   //which line of the input form
    respondObj.errrMsg = "BLANK USER NAME"; //error message
    respondObj.errExp = "The user name is blank or just spaces.";   //error explanation
    return res.send(respondObj);
  } else {
    //email has something in it
    user_email = req.body.username;
    user_email = user_email.trim();
    user_email_hash = loginMod.encrypt(user_email);
    if (_password === undefined || _password === null || _password === "") {
      respondObj.code = 102;
      respondObj.errCode = 102;
      respondObj.errLine = 2;   //which line of the input form
      respondObj.errrMsg = "BLANK PASSWORD"; //error message
      respondObj.errExp = "The password is blank or just spaces.";   //error explanation
      return res.send(respondObj);
    } else {
      //somthing typed in .. check it out
      user_password = _password;
      user_password = user_password.trim();


      var query = "SELECT * FROM administrators WHERE email_hash = ?";
      var emailEnc = loginMod.encrypt(user_email);
      connection.query(query, [emailEnc], function (err, response) {
        if (response.length == 0) {
          auditMod.writeAuditLog(connection, "Admin-bad", user_email, user_email, "code: 35" + " = " + "no such user", " ", " ");
          respondObj.code = 103;
          respondObj.errCode = 103;
          respondObj.errLine = 2;   //which line of the input form
          respondObj.errrMsg = "No such administrator"; //error message
          respondObj.errExp = "There is no nmatching username / password in the admin users password file";   //error explanation

          //no match in the administrator's file ... now check the users
          var query2 = "SELECT * FROM users WHERE email_hash = ?";
          var emailEnc = loginMod.encrypt(user_email);
          connection.query(query2, [emailEnc], function (err, response2) {
            console.log('full response = \n');
            console.log(response2);
            console.log('[0] = ');
            console.log(response2[0]);
            if (response2.length == 0) {
              //not a user in either the admin or the users database
              auditMod.writeAuditLog(connection, "Admin-bad", user_email, user_email, "code: 35" + " = " + "no such user", " ", " ");
              respondObj.code = 106;
              respondObj.errCode = 106;
              respondObj.errLine = 2;   //which line of the input form
              respondObj.errrMsg = "NO SUCH USER"; //error message
              respondObj.errExp = "There is no nmatching username in either the admin or users files";   //error explanation
            } else {
              //there is a match, so see if the password matches
              bcrypt.compare(user_password, response2[0].password_hash, function (err, result) {
                if (result == true) {
                  //valid password
                  console.log("Password matches user ... redirecting");
                  auditMod.writeAuditLog(connection, "User login", user_email, user_email, "code: 0" + " = " + "logged in", " ", " ");
                  respondObj.code = 210;    //user matches
                  respondObj.errCode = 210;
                  respondObj.errLine = 0;   //which line of the input form
                  respondObj.errrMsg = "Password matches a user... redirecting";  //error message
                  respondObj.errExp = "";  //error explanation
                  return res.send(respondObj);
                } else {
                  auditMod.writeAuditLog(connection, "User-bad", user_email, user_email, "code: 35" + " = " + "wrong password", " ", " ");
                  console.log("no match from list");
                  respondObj.code = 107;
                  respondObj.errCode = 107;
                  respondObj.errLine = 2;   //which line of the input form
                  respondObj.errrMsg = "WRONG USER PASSWORD"; //error message
                  respondObj.errExp = "Password does not match the user password on file.";   //error explanation
                  return res.send(respondObj);
                };
              });

            };
          });
          //return res.send(respondObj);
        } else {
          bcrypt.compare(user_password, response[0].password_hash, function (err, result) {
            if (result == true) {
              //valid password
              console.log("Password matches ... redirecting");
              auditMod.writeAuditLog(connection, "Admin login", user_email, user_email, "code: 0" + " = " + "logged in", " ", " ");
              respondObj.code = 200;    //admin matches
              respondObj.errCode = 200;
              respondObj.errLine = 0;   //which line of the input form
              respondObj.errrMsg = "Password matches ... redirecting";  //error message
              respondObj.errExp = "";  //error explanation
              return res.send(respondObj);
            } else {
              auditMod.writeAuditLog(connection, "Admin-bad", user_email, user_email, "code: 35" + " = " + "wrong password", " ", " ");
              console.log("no match from list");
              respondObj.code = 105;
              respondObj.errCode = 105;
              respondObj.errLine = 2;   //which line of the input form
              respondObj.errrMsg = "WRONG PASSWORD"; //error message
              respondObj.errExp = "Password does not match the administration password on file for this username.";   //error explanation
              return res.send(respondObj);
            };
          });
        };
      });
    };
  };

  // res.send({
  //   code: 204
  // });
})

//if running on a deployed site use the build folder
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// If no API routes are hit, send the React app
app.get('*', function (req, res) {
  console.log('generic default route');
  // console.log( __dirname );
  // console.log ("joined = ");
  // console.log( path.join( __dirname, './client/public/index.html')  );
  res.sendFile(path.join(__dirname, './client/public/index.html'));
  //res.sendFile('client/public/index.html');
});

// router.use(function (req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});