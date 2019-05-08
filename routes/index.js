var express = require('express');
var router = express.Router();
const Categoria = require('../models/categoria')
const Produtos = require('../models/produto')

/* GET home page. */
router.get('/', async function (req, res, next) {
  let _categorias = await Categoria.find({});
  let _produtos = await Produtos.find({});
    res.render('index', {categorias:_categorias, produtos: _produtos});
  
});

router.get('/categoria/:id', async function(req,res,next) {
  let _categorias = await Categoria.find({});
  let _produtos = await Produtos.find({categoria: req.params.id});
  res.render('categoria/index',{categorias:_categorias, produtos: _produtos})
})

module.exports = router;