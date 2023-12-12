// auth.js: User authentication

//imports 
var express = require('express');
var passport = require('passport');
var password = require('passport-local');;
var crypto = require('crypto');
var email = require('@sendgrid/mail');

//Database
var db