require('dotenv').config()
const express = require('express');

const mongoose = require('mongoose')
const session = require('express-session');

const app = express();

const db = require('./model/db')

const PORT = process.env.PORT || 5000;



// middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(session({
    secret:'my secret key',
    saveUninitialized:true,
    resave:false,
}))

// for storing session message
app.use((req, res, next) =>{
res.locals.message = req.session.message;
delete req.session.message;
next();
})

app.use(express.static("uploads"))

// set template engine
app.set("view engine","ejs");



// access the route
app.use('',require("./routes/routes"))



app.listen(PORT, ()=>{
    console.log(`server is listening on http://localhost:${PORT}`);
});