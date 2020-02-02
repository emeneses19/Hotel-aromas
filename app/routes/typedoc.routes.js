const express = require('express');
const router = express.Router();
const typedocCtrl = require('../controllers/typedoc.controller');

/* GET home page. */
router.get('/', typedocCtrl.list);
router.get('/:id', typedocCtrl.get);
//router.get('/:id/tareas', usuarioCtrl.tareas);
router.post('/create', typedocCtrl.create);
router.put('/update/:id', typedocCtrl.update);
router.delete('/:id', typedocCtrl.remove);

module.exports = router;