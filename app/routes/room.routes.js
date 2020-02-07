const express = require('express');
const router = express.Router();
const roomCtrl = require('../controllers/room.controller');

/* GET home page. */
router.get('/', roomCtrl.list);
router.get('/rooms/:startDate/:endDate', roomCtrl.roomava);
router.get('/:id', roomCtrl.get);
router.post('/create', roomCtrl.create);
router.put('/update/:id', roomCtrl.update);
router.delete('/:id', roomCtrl.remove);

//otras rutas
//filtro de fechas para reserva

module.exports = router;