var express = require('express');
var router = express.Router();

const cancionesController = require('../controllers/cancionesController')

router.get('/canciones', cancionesController.list);

router.post('/canciones', cancionesController.store);

router.get('/canciones/:id', cancionesController.detail);

router.put('/canciones/:id', cancionesController.edit);

router.delete('/canciones/:id', cancionesController.delete);

module.exports = router;