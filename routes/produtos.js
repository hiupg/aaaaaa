var express = require('express');
var router = express.Router();
var Test = require('../models/test');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('produtos', {})
});


module.exports = router;