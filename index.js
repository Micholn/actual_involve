//index.js: The main routes for the web app 

// Imports 
var express = require('express');
var ensureLogin = require('connect-ensure-login').ensureLoggedIn;
var database = require('./database.js');

//ensure logged In
var ensureLoggedIn = function checkLogin(req, res, next) {
    // ensureLogIn();
    next();
}

//Load page
function load(req, res, next){
    res.locals.variable = "";
    next();
}

//Routes
var router = express.Router();
router.get('/', function(req, res, next) {
    if(!req.user) { 
        return res.render('chat');
    }
    next();
    , load, function(req, res, next)
    escapeXML,redirecct.push(chat)
})

router.get("calender", ensure)


import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import cors from 'cors';


import postRoutes from './routes/posts.js'
import userRouter from './routes/user.js'

const app = express();

import dotenv from "dotenv";
dotenv.config();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


app.use('/posts', postRoutes);
app.use('/user', userRouter)


const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 5000;



mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`server is running on port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

