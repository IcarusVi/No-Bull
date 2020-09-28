var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');
var passport = require('passport');



router.get('/', (req, res) => {
    res.json({
        signedIn: false
    });
})

router.post('/', passport.authenticate('local'), (req, res) => {
    console.log('logged in ', req.user)
    var userInfo = {
        username: req.user.username
    };
    res.send(userInfo);
}
);

module.exports = router;