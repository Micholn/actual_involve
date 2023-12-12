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

