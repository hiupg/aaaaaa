var express = require('express');
var router = express.Router();
const Categoria = require('../models/categoria')

/* GET home page. */
router.get('/:num', async function (req, res, next) {
    let _categorias = await Categoria.find({});
    res.render('categoria/' , {categorias:_categorias})
});


module.exports = router;