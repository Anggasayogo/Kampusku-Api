require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose')
const app = express();
const port = process.env.PORT
let mongourl = process.env.URL;

const mongoDB = mongourl;
mongoose.connect(mongoDB)
mongoose.Promise = global.Promise

const db = mongoose.connection;
db.on("error",console.error.bind(console,"Connection error"));

const Router = require('./src/router/router');

app.use('/',Router);

app.listen(port,()=>{
    console.log(`[+] app listen on port ${port}`)
})