const express = require('express');
const router = express.Router();
const typeroomCtrl = require('../controllers/typeroom.controller');

/* GET home page. */
router.get('/', typeroomCtrl.list);
router.get('/:id', typeroomCtrl.get);
//router.get('/:id/tareas', usuarioCtrl.tareas);
router.post('/create', typeroomCtrl.create);
router.put('/update/:id', typeroomCtrl.update);
router.delete('/:id', typeroomCtrl.remove);

module.exports = router;