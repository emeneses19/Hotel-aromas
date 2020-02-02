const express = require('express');
const router = express.Router();
const clientCtrl = require('../controllers/client.controller');

/* GET home page. */
router.get('/', clientCtrl.list);
router.get('/:id', clientCtrl.get);
//router.get('/:id/tareas', usuarioCtrl.tareas);
router.post('/create', clientCtrl.create);
router.put('/update/:id', clientCtrl.update);
router.delete('/:id', clientCtrl.remove);

module.exports = router;