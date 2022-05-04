const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const indexRoute = require('./router/index.router');
const authRoute = require('./router/auth.router');
require("dotenv").config();
 
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/',indexRoute);
app.use('/auth',authRoute);

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.tnnqc.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}`
).then(result=>{
    console.log('Connected to Database');
    app.listen(process.env.PORT_NAME);
    console.log(`Port started at http://localhost:${process.env.PORT_NAME}`);
});