const express = require('express');
const db = require('../models');

const router = express.Router();
const Usuario = db.Usuario;

/* GET home page. */
router.get('/', async function(req, res, next) {
  console.log(db);
  usuarios = await Usuario.findAll();
  res.json(usuarios);
  // res.render('index', { title: 'Express' });
});

module.exports = router;
