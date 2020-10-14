var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');

var localsUserCheck = require('./middlewares/localsUserCheck')

var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products');
var usersRouter = require('./routes/users')
var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(session({secret: "Mensaje secreto"}))
app.use(localsUserCheck)


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productsRouter);


app.use((req, res, next) => {
  res.status(404).render(`error.ejs`)
});

module.exports = app;
