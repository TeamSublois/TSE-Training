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

app.use('/about', about);

module.exports = app;

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/posts', function(req, res) {
  res.render('posts');
});

app.get('/post1', function(req, res) {
  res.render('post1');
});

app.get('/about', function(req, res) {
  res.render('about');
});