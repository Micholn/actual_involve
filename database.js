// database.js: Creates and manages the database 

//Imports 
var sqlite3 = require('sqlite3');
var mkdirp = require('mkdirp');
var crypto = require('crypto');

// create or open database 
mkdir.sync('./database')
var db = new sqlite3.Database('./database/database.db');

// Hash password function 
db.hashPassword = function(password, salt) {
    return crypto.pbkdf2Sync(password, salt, 310000, 32, 'sha256');
}

// Create tables 
db.serialize(function() {
    //create users table
    db.run("CREATE TABLE IF NOT EXISTS users ( \
       id INTEGER PRIMARY KEY, \
       username TEXT UNIQUE, \    
       name TEXT, \ 
       email TEXT UNIQUE, \
       email_verified INTEGER, \
       hashed_password BLOB, \
       salt BLOB, \ 
       token TEXT, \ 
       login DATE \     
    )");

    //Update users table 
    //db.run(ALTER TABLE users ADD COLUMN token)


    // Create times table 
    db.run("CREATE TIMES TABL IF NOT EXISTS times () ")

});
