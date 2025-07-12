const express = require("express");
const app = express();
const dbconnect = require('./config/dbconnect');


app.use(express.json());
require('dotenv').config();

dbconnect();

app.get("/",(req,res) => {

    res.send("this is home page");

});

app.listen(process.env.PORT,() => {

    console.log("server is running");

})
