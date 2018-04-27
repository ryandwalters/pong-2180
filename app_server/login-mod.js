//
//routines for the logins

var crypto = require('crypto');
var auditMod = require('../app_server/auditLog-mod.js');
var nodemailer = require('nodemailer');



exports.encrypt = function (text) {
    var crypto_algorithm = 'aes-256-ctr';
    var crypto_password = 'HeLlo';
    var cipher = crypto.createCipher(crypto_algorithm, crypto_password)
    var crypted = cipher.update(text, 'utf8', 'hex')
    crypted += cipher.final('hex');
    return crypted;
};


exports.decrypt = function (text) {
    var crypto_algorithm = 'aes-256-ctr';
    var crypto_password = 'HeLlo';
    var decipher = crypto.createDecipher(crypto_algorithm, crypto_password)
    var dec = decipher.update(text, 'hex', 'utf8')
    dec += decipher.final('utf8');
    return dec;
};



exports.hackCheck = function (connMod, transportObj, str1, str2, str3, str4) {
    //hack attack should look for 
    //  <, >, !, &, /, \, '

    var chkStr = function (_strIn) {
        var outVal = false;
        if (_strIn === undefined || _strIn === null) {
            //it's a null or undefined so can't be hack
            outVal = false;
        } else {
            if (_strIn.indexOf('<') >= 0) outVal = true;
            if (_strIn.indexOf('>') >= 0) outVal = true;
            if (_strIn.indexOf('&') >= 0) outVal = true;
            if (_strIn.indexOf('/') >= 0) outVal = true;
            if (_strIn.indexOf('\\') >= 0) outVal = true;
            if (_strIn.indexOf("'") >= 0) outVal = true;
            if (_strIn.indexOf("!") >= 0) outVal = true;
        };
        return outVal;
    };

    var sendHackEmail = function () {
        var mailOptions = function (_to, _subject, _html) {
            this.from = '2180pong@gmail.com'; // sender address
            this.to = _to;                   // list of receivers
            this.subject = _subject;          // Subject line
            this.html = _html                 // plain text body
        };

        var transport = nodemailer.createTransport(transportObj);

        var subjectStr = "HACKING attempt at Table Top Genie @ " + moment().format("YYYY-MM-DD  HH:mm a");
        var messageStr = "<h3>User is attempting to use unauthorized characters</h3><br/>";
        messageStr += "<h3>Characters were detected and input was sanitized.<h3>";
        messageStr += "<h3>You can check on the status by using  /Admin/1  page.<h3><br/>";

        //var mailTo = "RichBu001@gmail.com";
        var mailTo = "RichBu001@gmail.com";
        var mailOptionsObj = new mailOptions(mailTo, subjectStr, messageStr);
        transporter.sendMail(mailOptionsObj, function (err, info) {
            if (err)
                console.log(err)
            else
                //shoud audit log
                console.log();
        });
    };

    var fullOutVal = false;
    fullOutVal = chkStr(str1) || chkStr(str2) || chkStr(str3) || chkStr(str4);

    if (fullOutVal) {
        //there was a hacking attempt
        if (str1 === undefined || str1 === null) str1 = " ";
        if (str2 === undefined || str2 === null) str2 = " ";
        if (str3 === undefined || str3 === null) str3 = " ";
        if (str4 === undefined || str4 === null) str4 = " ";

        sendHackEmail();
        auditMod.writeAuditLog(connMod, "HACK ATTEMPT", str1, str2, " ", " ", " ");
    };
    return fullOutVal;
};

