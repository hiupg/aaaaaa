var express = require('express');
var router = express.Router();
const Categoria = require('../models/categoria')
const Produtos = require('../models/produto')

/* GET home page. */
router.get('/', async function (req, res, next) {
  let _categorias = await Categoria.find({});
  let _produtos = await Produtos.find({}).sort({contViews:-1}).limit(6);
    res.render('index', {categorias:_categorias, produtos: _produtos});
  
}),

router.get('/produto/buscar', async function(req,res,next) {
  let _categorias = await Categoria.find({});
  let _produtos = await Produtos.find({$text: {$search: req.query.titulo}})
  res.render('produtos/buscar',{categorias:_categorias, produtos: _produtos})
}),

router.get('/categoria/:id', async function(req,res,next) {
  let _categorias = await Categoria.find({});
  let _produtos = await Produtos.find({categoria: req.params.id});
  res.render('categoria/index',{categorias:_categorias, produtos: _produtos})
}),

router.get('/produtos/:id', async function(req,res,next) {
  let _categorias = await Categoria.find({});
  let _produtos = await Produtos.findOne({_id: req.params.id});
  
  _produtos.contViews+=1;

  _produtos.save();

  res.render('produtos/index',{categorias:_categorias, produtos: _produtos, });
 
}),


module.exports = router;