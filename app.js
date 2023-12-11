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

