//
//where did this come from ?
//import { ADDRCONFIG } from "dns";

// Set up MySQL connection. 
//var mysql = require('mysql');
var mysql = require('mysql');
//var app = require('../../server');
var loginMod = require('../app_server/login-mod.js');
var auditMod = require('../app_server/auditLog-mod.js');


/*var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "Imperial_Assault_db"
});*/

console.log('at the connection');
if (configData.mySQLforceRemote === true) {
    console.log('force is on');
    //if force remote, then use the designed database
    connection = mysql.createConnection({
        port:3306,
        host: 'dyud5fa2qycz1o3v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'sncbdapp022v2hk2',
        password: 'f1xmf09rrq06wypn',
        database: 'h12uue9eo70qg2yq'
    });
} else {
    console.log('force is off');
    if (process.env.JAWSDB_URL) {
        console.log('env variable is on');
        connection = mysql.createConnection(process.env.JAWSDB_URL);
        // });
    } else {
        console.log('using local mySQL');
        connection = mysql.createConnection({
            port:3306,
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'Pong2108_db'
            //database: 'z2znazc687xl2iem'
        });
    };   
};

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
    auditMod.writeAuditLog(connection, "Reboot", "system", " ", "entire server rebooted", " ", " ");
});
//To run Database on JAWSDB



// Export connection for our ORM to use.
module.exports = connection;