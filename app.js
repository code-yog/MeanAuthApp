const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mangoose = require("mongoose");
const users = require('./routes/users');
const tutorials = require('./routes/tutorials');
const mongoose = require("mongoose");
const config = require('./config/database');

//Connect to the database
mongoose.connect(config.database,{ useNewUrlParser: true });

//On Successful connection
mongoose.connection.on('connected',()=>{
    console.log('Connected to database',config.database);
});

//Handle error in the connection
mongoose.connection.on('error',(err)=>{
    console.log('Database error',err);
})

const app = express();

//Port Number
const port = 3000;
//const port = process.env.PORT || 8080;


//CORS Middleware for cross domain access
app.use(cors());

//Set static folder
app.use(express.static (path.join(__dirname,'public')));

//Body Parser middle ware
app.use(bodyparser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);


//User Middleware
app.use('/users',users);

app.use('/tutorials',tutorials);

//index Route
app.get('/',(req,res)=>{
res.send('Welcome Prajakt Thale');
})

//Start Server
app.listen(port,()=>{
    console.log("server started");
})
