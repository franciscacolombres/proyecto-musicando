var express = require('express');
var router = express.Router();

const generosController = require('../controllers/generosController');
router.get('/generos', generosController.list);

module.exports = router;