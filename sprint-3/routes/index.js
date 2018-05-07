var express = require('express');
var router = express.Router();

var data = require('../chirps.json')

router.get('/', function(req, res, next) {
	res.render('index', data);
});

router.post('/new', (req, res) => {
	req.body.isRetweet = false;
	req.body.comments = 0;
	req.body.retweets = 0;
	req.body.likes = 0;
	data.chirps.push(req.body);
})

module.exports = router;
