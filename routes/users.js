var express = require('express');
var router = express.Router();
var exerciseController = require('../controllers/exerciseController')

router.get('/', exerciseController.saveRoutine)

module.exports = router;

