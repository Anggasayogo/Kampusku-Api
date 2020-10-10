require('dotenv/config');
const express = require('express')
const app = express();
const port = process.env.PORT

const Router = require('./src/router/router');

app.use('/',Router);

app.listen(port,()=>{
    console.log(`[+] app listen on port ${port}`)
})