require('dotenv').config();
var bodyParser = require('body-parser');
var express = require('express');
const session = require('express-session');
var cors = require('cors');
var passport = require('passport');
var testAuthenticate = require('./auth/passport');
var app = express();
const port = 8080;


//Following vars are for routeHandlers
var indexRouter = require('./routes/index');
var signUpRouter = require('./routes/signup');
var loginRouter = require('./routes/login');
var logOutRouter = require('./routes/logout');
var addRoutineRouter = require('./routes/users');
const mongoose = require('mongoose');

var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
}

//Set up mongoose connection; 
const uri = "mongodb+srv://NewUser:"+ process.env.DB_PASS +"@cluster0.fq0b2.mongodb.net/No_Bull?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', ()=> {
    console.log('There was error connecting to the database')
})

db.once('open', () => {
    console.log('Sucessfully connected to database')
})
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))


// the following allows use to use passport middleware
require('./auth/passport')(app);


checkAuth = (req,res,next) =>{
    if(req.isAuthenticated()){
        console.log(req.user.username + " was redirected to dash")
        return res.redirect('/');
    }
    else{
        next()
    }
}

//Using routes
app.use('/', indexRouter);
app.use('/signup', checkAuth, signUpRouter);
app.use('/login', checkAuth, loginRouter);
app.use('/logout', logOutRouter);
app.use('/users', addRoutineRouter);


app.listen(port, ()=>{
    console.log('No Bull port is up and running')
})

//testing to see how server level middle ware works by redirecting login
