const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const userRoutes = require('./routes/user.routes.js')
const cors = require('cors');
const cookie_parser = require('cookie-parser');
const connectDB = require('./db/db.js');
connectDB();
app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookie_parser());
const captainRoutes = require('./routes/captain.routes.js');


app.get('/',(req,res)=>{
    res.send("Hi Hello");
});

app.use("/user",userRoutes);
app.use('/captain', captainRoutes);
module.exports = app;