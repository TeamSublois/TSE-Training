var express = require('express');
var router = express.Router();

/* GET /about/
 * Note that the path specified below ('') is
 * relative to the path from app.js ('index'),
 * so the effective path is still '/posts1'
 */
router.get('/', function(req, res, next) {
	res.render('posts1'); // renders /views/posts1.hbs
});

module.exports = router;