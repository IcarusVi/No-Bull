var express = require('express');
var router = express.Router();
var exerciseController = require('../controllers/exerciseController')

router.post('/add', exerciseController.saveRoutine)

router.get('/', exerciseController.getRoutine)


module.exports = router;

