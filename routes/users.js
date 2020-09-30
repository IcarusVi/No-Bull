var express = require('express');
var router = express.Router();
var exerciseController = require('../controllers/exerciseController')

router.post('/', exerciseController.saveRoutine)

module.exports = router;

