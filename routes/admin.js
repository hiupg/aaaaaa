const express = require('express');
const router = express.Router();
const Categoria = require('../models/categoria')

/* GET home page. */
router.get('/', async function (req, res, next) {
    let _categorias = await Categoria.find({})
    res.render('admin/index', {
        categorias: _categorias
    })
});

module.exports = router;
