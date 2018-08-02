var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/seller');
var buyer=require('../models/buyer');
var seller=require('../models/seller');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/gallery', function(req, res, next) {
  res.render('gallery', { title: 'Express' });
});
router.get('/bag',function(req,res,next){
res.render('bag',{title:'Express'});
});

router.get('/dairy',function(req,res,next){
  res.render('dairy',{title:'Express'});
  });
  router.get('/fruits',function(req,res,next){
    res.render('fruits',{title:'Express'});
    });
    
    router.get('/jewellery',function(req,res,next){
      res.render('jewellery',{title:'Express'});
      });
      router.get('/raw',function(req,res,next){
        res.render('raw',{title:'Express'});
        });
        router.get('/pf',function(req,res,next){
        res.render('pf',{title:'Express'});
        });
        
        router.get('/pulses',function(req,res,next){
          res.render('pulses',{title:'Express'});
          });
          router.get('/toy',function(req,res,next){
            res.render('toy',{title:'Express'});
            });
            
            router.get('/vege',function(req,res,next){
              res.render('vege',{title:'Express'});
              });
      
              router.get('/spices',function(req,res,next){
                res.render('spices',{title:'Express'});
                });
                                                    
router.get('/gitika', function(req, res, next) {
  res.render('gitika', { title: 'Express' });
});
router.get('/pulkit', function(req, res, next) {
  res.render('pulkit', { title: 'Express' });
});
router.get('/dikshita', function(req, res, next) {
  res.render('dikshita', { title: 'Express' });
});

router.get('/vinayak', function(req, res, next) {
  res.render('vinayak', { title: 'Express' });
});
router.get('/about',function(req, res) {
  res.render('about');
});
router.get('/buyers',function(req, res) {
  res.render('buyers');
});

router.get('/sellers',function(req, res) {
  res.render('sellers');
});


router.get('/signup',function(req, res) {
  res.render('signup',{title:'Express'});
  
});
router.post('/signupb', function(req, res){
  var user = req.body.user;
  var email= req.body.email;
  var password = req.body.password;
  var cpassword = req.body.cpassword;
  var address=req.body.address;
  var state=req.body.state;
  var contact = req.body.contact;
  var dob=req.body.dob;


  var newbuyer = new buyer();
  newbuyer.user=user;
  newbuyer.email=email;
  newbuyer.password=password;
  newbuyer.cpassword=cpassword;
  newbuyer.address=address;
  newbuyer.state=state;
  newbuyer.contact=contact;
  newbuyer.dob=dob;

  newbuyer.save(function(err, savedBuyer){

    if(err){
      console.log(err);
      return res.status(500).send();

    }
     console.log("new Buyer added")
    // return res.status(200).send();
    res.redirect('/login');
  })



});

router.post('/signups', function(req, res){
  var user = req.body.user;
  var category = req.body.category;
  var email= req.body.email;
  var pass1 = req.body.pass1;
  var pass2 = req.body.pass2;
  var address=req.body.address;
  var state=req.body.state;
  var contact = req.body.contact;
  var dob = req.body.dob;

    
  var newseller = new seller();
  newseller.user=user;
  newseller.category=category;
  newseller.email=email;
  newseller.pass1=pass1;
  newseller.pass2=pass2;
  newseller.address=address;
  newseller.state=state;
  newseller.contact=contact;
  newseller.dob=dob;
  

  newseller.save(function(err, savedSeller){

    if(err){
      console.log(err);
      return res.status(500).send();

    }
     console.log("new Seller added")
    //return res.status(200).send();
   res.redirect('/login');
  })

 });

 
  /*router.post('/login', function(req, res) {
  var user = req.body.user;
  var password = req.body.password;
  
  seller.findOne({user:user, password: password}, function(err,Seller){
    if(err){
      console.log(err);
      //return res.status(500).send();
  
    }
    if(!Seller){
      console.log(err);
      return res.status(404).send();
    }
    res.redirect('/sellers') ;
  })
  
  });
  
*/

 
 passport.use(new LocalStrategy(
	function (user, password, done) {
		User.getUserByUsername(user, function (err, user) {
			if (err) throw err;
			if (!user) {
				return done(null, false, { message: 'Unknown User, PLease register first to login' });
			}

			User.comparePassword(password, user.password, function (err, isMatch) {
				if (err) throw err;
				if (isMatch) {
					return done(null, user);
				} else {
					return done(null, false, { message: 'Oops! wrong password' });
				}
			});
		});
	}));

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.getUserById(id, function (err, user) {
		done(err, user);
	});
});

router.post('/login',
	passport.authenticate('local', { successRedirect: '/sellers', failureRedirect: '/login', failureFlash: true }),
	function (req, res) {
		res.redirect('/sellers');
  });
  



  router.get('/logout', (req, res) => {
    if (req.cookies.user_sid) {
        res.clearCookie('_id');
        res.redirect('/');
    } else {
        res.redirect('/');
    }
   });
  

module.exports = router;