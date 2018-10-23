/**
 * Created by Saurabh on 08-09-2018.
 */
//importing modules
var express = require('express');
var mongoose= require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var index = express();

const route=require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist');

//on connection
mongoose.connection.on('connected',function(){
    console.log('Connected to database mongodb @ 27017');
});

mongoose.connection.on('error',function(err){
    if(err){
        console.log('Error Happened'+err);

    }
});


//port number
const port =3000

//adding middleware - corse
index.use(cors())

//body - parser
index.use(bodyParser.json());


//static files
index.use(express.static(path.join(__dirname,'public')));

//routes
index.use('/api',route);

//testing server
index.get('/',function(req,res){
    res.send('hello world');
});

index.listen(port,function(){
    console.log('Server started successfully at port number :'+port);


});

