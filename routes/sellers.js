var express = require('express');
var router = express.Router();
const passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const Joi = require('joi');

var Seller = require('../models/seller').default;

// Register
router.get('/signup', function (req, res) {
	res.render('signup');
});

// Login
router.get('/login', function (req, res) {
	res.render('login');
});

// Register User
// router.post('/signup', function (req, res) {
// 	var name = req.body.user;
// 	var email = req.body.email;
// 	var password = req.body.password;
// 	var cpassword = req.body.cpassword;

// 	// Validation
// 	req.checkBody('user', 'Name is required').notEmpty();
// 	req.checkBody('email', 'Email is required').notEmpty();
// 	req.checkBody('email', 'Email is not valid').isEmail();
// 	//req.checkBody('username', 'Username is required').notEmpty();
// 	req.checkBody('password', 'Password is required').notEmpty();
// 	req.checkBody('cpassword', 'Passwords do not match').equals(req.body.password);

// 	var errors = req.validationErrors();

// 	if (errors) {
// 		res.render('signup', {
// 			errors: errors
// 		});
// 	}
// 	else {
// 		//checking for email and username are already taken
// 		Buyer.findOne({ user: { 
// 			"$regex": "^" + user + "\\b", "$options": "i"
// 	}}, function (err, user) {
// 			Buyer.findOne({ email: { 
// 				"$regex": "^" + email + "\\b", "$options": "i"
// 		}}, function (err, mail) {
// 				if (user || mail) {
// 					res.render('signup', {
// 						user: user,
// 						mail: mail
// 					});
// 				}
// 				else {
// 					var newBuyer = new Buyer({
// 						name: user,
// 						email: email,
// 						password: password
// 					});
// 					Buyer.createBuyer(newBuyer, function (err, buyer) {
// 						if (err) throw err;
// 						console.log(Buyer);
// 					});
//          	req.flash('success_msg', 'You are registered and can now login');
// 					res.redirect('/users/login');
// 				}
// 			});
// 		});
// 	}
// });

// passport.use(new LocalStrategy(
// 	function (username, password, done) {
// 		User.getUserByUsername(username, function (err, user) {
// 			if (err) throw err;
// 			if (!user) {
// 				return done(null, false, { message: 'Unknown User' });
// 			}

// 			User.comparePassword(password, user.password, function (err, isMatch) {
// 				if (err) throw err;
// 				if (isMatch) {
// 					return done(null, user);
// 				} else {
// 					return done(null, false, { message: 'Invalid password' });
// 				}
// 			});
// 		});
// 	}));

// passport.serializeUser(function (user, done) {
// 	done(null, user.id);
// });

// passport.deserializeUser(function (id, done) {
// 	User.getUserById(id, function (err, user) {
// 		done(err, user);
// 	});
// });

// router.post('/login',
// 	passport.authenticate('local', { successRedirect: '/', failureRedirect: '/users/login', failureFlash: true }),
// 	function (req, res) {
// 		res.redirect('/');
// 	});

// router.get('/logout', function (req, res) {
// 	req.logout();

// 	req.flash('success_msg', 'You are logged out');

// 	res.redirect('/users/login');
// });

module.exports = router;