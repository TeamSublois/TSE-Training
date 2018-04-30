var express = require('express');
var router = express.Router();

/* GET /about/
 * Note that the path specified below ('') is
 * relative to the path from app.js ('posts'),
 * so the effective path is still '/posts/'
 */
router.get('/', function(req, res, next) {
	res.render('posts'); // renders /views/posts.hbs
});

module.exports = router;