const express = require('express');
const router = express.Router();
const roomCtrl = require('../controllers/room.controller');

/* GET home page. */
router.get('/', roomCtrl.list);
router.get('/:id', roomCtrl.get);
//router.get('/:id/tareas', usuarioCtrl.tareas);
router.post('/create', roomCtrl.create);
router.put('/update/:id', roomCtrl.update);
router.delete('/:id', roomCtrl.remove);

module.exports = router;