var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res) {
	// render the page and pass in any flash data if it exists
	res.render('login', { message: req.flash('loginMessage') }); 
});

router.get('/signup', function(req, res) {
	// render the page and pass in any flash data if it exists
	res.render('signup', { message: req.flash('signupMessage') });
});

router.get('/logout', function(req, res){
	req.logout();
	res.render('index');
});

router.post('/signup', function(req, res){
	req.checkBody("email", "Enter a valid email address.").isEmail();
	var errors = req.validationErrors();
  if (errors) {
		res.render('signup',{error: errors});
		return;
  } 
	else {
		passport.authenticate('local-signup', { 
		successRedirect: '/users',
		failureRedirect: '/signup',
		failureFlash: true
		})
	}
});

router.post('/login',
	passport.authenticate('local-login', {
		failureRedirect: '/login',
		successRedirect: '/users',
		failureFlash: true
	})
);

module.exports = router;
