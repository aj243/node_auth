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
		res.render('/');
	});

// module.exports = function (passport) {    	

// 	// =====================================
// 	// SIGNUP ==============================
// 	// =====================================
// 	// show the signup form	

// 	// process the signup form
// 	// router.post('/signup', do all our passport stuff here);

	

// };

router.post('/signup',
	passport.authenticate('local-signup', { 
		successRedirect: '/users',
		failureRedirect: '/signup',
		failureFlash: true
	}));

router.post('/login', 
	passport.authenticate('local-login', {
		failureRedirect: '/login',
		successRedirect: '/users',
		failureFlash: true
 }));

// =====================================
// PROFILE SECTION =====================
// =====================================
// we will want this protected so you have to be logged in to visit
// we will use route middleware to verify this (the isLoggedIn function)
router.get('/user', isLoggedIn, function(req, res) {
	res.render('user', {
		user : req.user // get the user out of session and pass to template
	});
});


function isLoggedIn(req, res, next) {
	// if user is authenticated in the session, carry on 
	if (req.isAuthenticated())
			return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}

module.exports = router;
