const express = require('express');
const router = express.Router();
const usuarioCtrl = require('../controllers/usuario.controller');

/* GET home page. */
router.get('/', usuarioCtrl.list);
router.get('/:id', usuarioCtrl.get);
router.post('/create', usuarioCtrl.create);
router.put('/update/:id', usuarioCtrl.update);
router.delete('/:id', usuarioCtrl.remove);

module.exports = router;