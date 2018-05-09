var express = require('express');
var router = express.Router();

var db

const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://blbudima:blbudima@ds119350.mlab.com:19350/chirps', (err, database) => {

})

MongoClient.connect('mongodb://blbudima:blbudima@ds119350.mlab.com:19350/chirps', (err, client) => {
	if (err) return console.log(err)
	db = client.db('chirps')
})

//router.set('view engine', 'ejs')

router.get('/', function(req, res, next) {
	var cursor = db.collection('chirps').find().toArray((err, result) => {
		if (err) return console.log(err)
		res.render('index.ejs', {chirps: result})
	})
});

router.post('/new', (req, res) => {
	req.body.isRetweet = false;
	req.body.comments = 0;
	req.body.retweets = 0;
	req.body.likes = 0;
	db.collection('chirps').save(req.body, (err, result) => {
		if (err) return console.log(err)
		res.redirect('/')
	})	
})

module.exports = router;
