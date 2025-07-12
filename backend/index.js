const express = require("express");
const app = express();
const dbconnect = require('./config/dbconnect');
const router = require("./routes/router");
const cors = require("cors");
app.use(cors());


app.use(express.json());
require('dotenv').config();

dbconnect();

app.get("/",(req,res) => {

    res.send("this is home page");

});

app.use("/odoo",router);

app.listen(process.env.PORT,() => {

    console.log("server is running");

})
