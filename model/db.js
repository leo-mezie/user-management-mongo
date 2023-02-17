require('dotenv').config();

const mongoose = require('mongoose')


mongoose.set('strictQuery',false)
// db connection
mongoose.connect(process.env.DB_URI,
    {
    useNewUrlParser:true, 
    useUnifiedTopology: true
    });


const db = mongoose.connection;
db.on('error',(error)=>console.log (error));
db.once('open', () =>console.log("Database Connected Successfully! "))


require('../app')