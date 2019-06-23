"use strict";

//alter process to add environment variables
require('dotenv').config();
var express = require('express');
var playgroundApp = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
//this will fix deprecation warning
mongoose.set('useCreateIndex', true);
//another deprecation fix
mongoose.connect('mongodb://localhost:27017/playground', { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log("FAILED TO CONNECT TO DB");
        console.log(err);
        return;
    }
    console.log("SUCCESSFULLY CONNECTED TO PLAYGROUND DB");
});

const PORT = process.env.PORT | 3000;

console.log("PORT SPECIFIED AS: " + PORT);

// parse application/json middleware
playgroundApp.use(bodyParser.json());

// parse application/x-www-form-urlencoded middleware
playgroundApp.use(bodyParser.urlencoded({ extended: false }));

var cors = require('cors');
playgroundApp.use(cors());




//REQUIRE A TEST MODULE HERE. 
playgroundApp.use(passport.initialize());
require('./auth/authConfig');


playgroundApp.post(

    '/login', (req, res) => {
        passport.authenticate('local',
            (err, usr, info) => {
                if (!err) {
                    if(!user)
                    {
                        res.status(400).json(info);
                    }
                    else
                    res.status(401).json(info);
                }
                else
                    res.status(400).json(info);
              
            })
            (req, res)
    }


);



require('./searchQueries/searchQueries')(playgroundApp);



playgroundApp.listen(PORT,
    () => {
        console.log("PLAYGROUND SERVER STARTED");
    }
);

