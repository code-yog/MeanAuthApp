const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mangoose = require("mongoose");
const users = require('./routes/users');
const mongoose = require("mongoose");
const config = require('./config/database');

//Connect to database
mongoose.connect(config.database,{ useNewUrlParser: true });
//on connection
mongoose.connection.on('connected',()=>{
    console.log('Connected to database',config.database);
});

mongoose.connection.on('error',(err)=>{
    console.log('Database error',err);
})



const app = express();

//Port Number
const port = 3000;

//CORS Middleware for cross domain access
app.use(cors());

//Set static folder
app.use(express.static (path.join(__dirname,'public')));

//Body Parser middle ware
app.use(bodyparser.json());

app.use('/users',users);

//index Route
app.get('/',(req,res)=>{
res.send('Welocome Prajakt Thale');
})

app.listen(port,()=>{
    console.log("server started");
})
