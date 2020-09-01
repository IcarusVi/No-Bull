var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

router.get('/', (req, res)=>{
    res.send('This is the signup page');
})

router.post('/', userController.saveUser);

module.exports = router;