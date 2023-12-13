// auth.js: User authentication

//imports 
var express = require('express');
var passport = require('passport');
var password = require('passport-local');;
var crypto = require('crypto');
var email = require('@sendgrid/mail');

//Database
var db = require('./database.js');

//Router
var router = express.Router();

//Emails 
var EMAIL = "admin@drinks.chat";
var PASSWORD = "Drinks256";
var DOMAIN = "drinks.chat";
email.setApiKey("SCJNJNJNJNJNJNJNRYDJDKKDD");

// verify user password via database 
passport.use(new password(function verify(username, password, cb) {
  //Query User
  username = username.toLowerCase();
  db.get('SELECT * FROM users WHERE username = ?', [username], function(err, row) {
    if (err) { return cb(err);}
    if (!row) { return cb(null, false, { message: 'Incorrect email or password.'}); }

    //Check password
    var hashedPassword = db.hashedPassword(password, row.salt);
    if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
        return cb(null, false, { message: 'Incorrect email or password.'});
    }  

    //
  });
}));
