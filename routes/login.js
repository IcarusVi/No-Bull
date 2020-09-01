var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');
var passport = require('passport');



router.get('/', (req, res)=>{
    res.send('This is the login page');
})

router.post('/', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

module.exports = router;