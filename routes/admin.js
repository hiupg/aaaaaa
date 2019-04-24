const express = require('express');
const router = express.Router();
const Categoria = require('../models/categoria')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('admin/index', {})
});

module.exports = router;
