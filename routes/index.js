//This route is just to check if a User signed in or not
var express = require('express');
var router = express.Router();

router.get('/', (req, res)=>{
    //If user is not signed in redirect to them this
    if(!req.isAuthenticated()){
        res.json({
            signedIn: false
        })
    }
    else{
        res.json({
            signedIn: true,
            username: req.user.username,
            id: req.user._id
        })
    }
})

module.exports = router;

