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
       name Text, \ 
       email TEXT UNIQUE, \
       
        
        
        
    )");





});
