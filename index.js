const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const indexRoute = require('./router/index.router');
require("dotenv").config();
 
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/',indexRoute);

app.listen(process.env.PORT_NAME,()=>{
    console.log(`Port started at http://localhost:${process.env.PORT_NAME}`);
});