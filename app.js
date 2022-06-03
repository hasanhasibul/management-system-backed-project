// basic import

const express = require('express');
const app = new express();

const router = require('./src/routes/api')

//middleware import
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const hpp = require('hpp');
const xssClean = require('xss-clean');
const rateLimit = require('express-rate-limit');

//rate limit implement

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100 // Disable the `X-RateLimit-*` headers
})

// middleware implement 
const corsOptions ={
    origin:'https://vast-journey-49790.herokuapp.com/', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(mongoSanitize());
app.use(helmet());
app.use(hpp());
app.use(xssClean());
app.use(limiter);

// mongodb connections 

const mongoose = require('mongoose')

const URI = "mongodb://127.0.0.1:27017/membershipManagement";
const OPTION = {user:'',pass:'',autoIndex:true}
mongoose.connect(URI,OPTION,(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("mongodb connection successful");
    }
})


app.use('/api/v1',router);

// undefine route
app.use('/',(req,res)=>{
    res.status(200).json({status:'running server'})
})
app.use('*',(req,res)=>{
    res.status(404).json({status:'fail',data:"Not Found"})
})

module.exports = app ;
