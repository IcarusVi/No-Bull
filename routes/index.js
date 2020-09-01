var express = require('express');
var router = express.Router();

router.get('/', (req, res)=>{
    //If user is not signed in redirect to them this
    if(!req.isAuthenticated()){
        res.send('Welcome to No Bull please Sign in');
    }
    else{
        res.send('Welcome to the No Bull dash ' + req.user.username);
    }
})

module.exports = router;

