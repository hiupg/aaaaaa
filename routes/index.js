var express = require('express');
var router = express.Router();
const Categoria = require('../models/categoria')

/* GET home page. */
router.get('/', async function (req, res, next) {
  let _categorias = await Categoria.find({});
    res.render('index', {categorias:_categorias});
  
});

module.exports = router;