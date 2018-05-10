var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var about = require('./routes/about');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Pages
//app.use('/', index);
//app.use('/posts', posts);
//app.use('/about', about);
//app.use('/post1', post1);
//app.get('/', function(req,res){
	//res.sendFile(__dirname + '/saveforlater.html')
//})
//app.post('/quotes', (req, res)=> {
//	console.log(req.body)
//})


app.get('/about', (req, res) => {
	res.render('about')
})
app.get('/posts', (req, res) => {
	res.render('posts')
})
app.get('/', (req, res) => {
	res.render('index')
})
app.get('/post1', (req, res) => {
	res.render('post1')
})


	

module.exports = app;
