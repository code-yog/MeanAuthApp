const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mangoose = require("mongoose");

const app = express();

const port = 3000;

app.get('/',(req,res)=>{
res.send('Welocome Prajakt Thale');
})

app.listen(port,()=>{
    console.log("server started");
})
