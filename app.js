var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser=require('body-parser')
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var logger = require('morgan');
var mongo=require('mongodb');
var mongoose=require('mongoose');
mongoose.Promise = global.Promise;

  mongoose.connect('mongodb://localhost/buyer');
	var db= mongoose.connection;


var index = require('./routes/index');
var buyer = require('./routes/buyers');
var seller = require('./routes/sellers');
var sellers = require('./routes/sellers');


var app = express();

// view engine setup
var swig = require('swig');
app.engine('html',swig.renderFile);

app.set('views',path.join(__dirname,'views'));
app.set('view engine' , 'html');  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/buyers', buyer);
app.use('/sellers',seller);
app.use('/sellers',sellers);

// Express Session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



 module.exports = app;
