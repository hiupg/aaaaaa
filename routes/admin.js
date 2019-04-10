const express = require('express');
const router = express.Router();
const Categoria = require('../models/categorias')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('admin/index', {})
});

router.get('/produtos', function (req, res, next) {
    res.render('admin/produtos/index', {})
});

router.get('/categorias', function (req, res, next) {
    res.render('admin/categorias/index', {})
});

router.get('/categorias/cadastrar', function (req, res, next) {
    res.render('admin/categorias/cadastrar', {})
});

router.post('/categorias/cadastrar', function (req, res, next) {
  let categoria = new Categoria({ 
    titulo: req.body.titulo,
  });
    categoria.save(function(erro){
        if(erro){
            console.log(erro);
        }
        else{
                res.redirect('/admin/categorias');
        }
        
    });
});

module.exports = router;
