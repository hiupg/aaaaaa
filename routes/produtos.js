var express = require('express');
var router = express.Router();
var Test = require('../models/test');

/* GET home page. */
router.get('/categoria/:num', function (req, res, next) {
    res.render('/produtos/index', {})
});


module.exports = router;