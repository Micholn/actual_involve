// app.js: The main web app file 

//Server port 
const PORT = 80;

//Imports 
var express = require('express');
var http = require('http');
var createError = require('http-errors');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var sessionStore = require('connect-sqlite3')(session);
var path = require('path');
var csrf = require('csruf');

//App files 
var runApp = require("./app/run.js");
var initSocketIO = require("./app/socketio.js");
var ai = require("./app/ai.js");
var database = require("./database.js");

//web server
var app = express();
var server = http.createServer(ap);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// User login sessions
app.use(session({
    secret: 'session',
    resave: false, 
    saveUninitialized: false,
    store: new sessionStore
}))

