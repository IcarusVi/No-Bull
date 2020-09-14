var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');
var passport = require('passport');



router.get('/', (req, res) => {
    res.json({
        signedIn: false
    });
})

router.post('/', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
})
);

module.exports = router;