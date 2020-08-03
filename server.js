"use strict";
const routes = require('./routes.js');
const auth = require('./auth.js');

const express = require("express");

const fccTesting = require("./freeCodeCamp/fcctesting.js");
const app = express();
const mongo = require('mongodb').MongoClient;




fccTesting(app); //For FCC testing purposes
app.use("/public", express.static(process.cwd() + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//const pug = require('pug');
app.set('view engine', 'pug');



mongo.connect(process.env.DATABASE, (err, client) => {
  var db = client.db('myproject');
  if(err) {
    console.log('Database error: ' + err);
  } else {
    console.log('Successful database connection');
    

    
    
    
    }
  
    auth(app,db);
    routes(app, db);
});






