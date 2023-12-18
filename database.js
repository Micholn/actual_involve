// database.js: Creates and manages the database 

//Imports 
var sqlite3 = require('sqlite3');
var mkdirp = require('mkdirp');
var crypto = require('crypto');

// create or open database 
mkdir.sync('./database')
var db = new sqlite3.Database('./database/database.db');

// Hash password function 