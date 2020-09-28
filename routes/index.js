//This route is just to check if a User signed in or not
var express = require('express');
var router = express.Router();

router.get('/', (req, res)=>{
    console.log(req.user);
    if(req.user){
        res.json({
            signedIn: true,
            username: req.user.username,
        })
    }
    else {
        res.json({ user: null })
    }
})

module.exports = router;

