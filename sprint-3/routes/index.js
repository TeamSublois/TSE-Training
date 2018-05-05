var express = require('express');
var router = express.Router();

var data = require('../chirps.json')

router.get('/', function(req, res, next) {
	res.render('index', data);
});

module.exports = router;
