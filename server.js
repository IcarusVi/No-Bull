require('dotenv').config();
var bodyParser = require('body-parser');
var express = require('express');
const session = require('express-session');
var passport = require('passport');
var testAuthenticate = require('./auth/passport');
var app = express();
const port = 3000;


//Following vars are for routeHandlers
var indexRouter = require('./routes/index');
var signUpRouter = require('./routes/signup');
var loginRouter = require('./routes/login')
const mongoose = require('mongoose');


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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({
    secret: process.env.SECRET
}))


// the following allows use to use passport middleware
require('./auth/passport')(app);


//Using routes
app.use('/', indexRouter);
app.use('/signup', signUpRouter);
app.use('/login', loginRouter)

app.listen(port, ()=>{
    console.log('No Bull port is up and running')
})