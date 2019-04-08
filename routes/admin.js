var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('admin/index', {})
});

router.get('/produtos', function (req, res, next) {
    res.render('admin/produtos', {})
});

router.get('/categorias', function (req, res, next) {
    res.render('admin/categorias/index', {})
});

router.get('/categorias/cadastrar', function (req, res, next) {
    res.render('admin/categorias/cadastrar', {})
});

module.exports = router;
