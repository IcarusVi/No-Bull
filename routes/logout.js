var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');
var passport = require('passport');



router.get('/', (req, res)=>{
    req.logOut();
    res.redirect('/login');
})


module.exports = router;