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

    //update login date 
    console.log("Login: " + username); 
    db.run('UPDATE users SET login=DateTime() WHERE username=?', [username], function(err) {
        if (err) { return cb(err); }
        //Accept login
        return cb(null, row);
    });
  });
}));


//set data stored in the session 
passport.serializeUser(function(user, cb){
    process.nextTick(function() {
        cb(null, { id: user.id, username: user.username});
    });
});
passport.deserializeUser(function(user, cb) {
    process.nextTick(function(user, cb){
        return cb(null, user);
    });
});

//Log in and sign up pages
router.get("/login", function(req, res, next) { res.render('login');  })