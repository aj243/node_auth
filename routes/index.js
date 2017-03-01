var express = require('express');
var router = express.Router();
// var flash = require('connect-flash');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res) {
		// render the page and pass in any flash data if it exists
	res.render('login', { message: req.flash('loginMessage') }); 
});

// router.post('/login', do all our passport stuff here);

// =====================================
// SIGNUP ==============================
// =====================================
// show the signup form
router.get('/signup', function(req, res) {
	// render the page and pass in any flash data if it exists
	res.render('signup', { message: req.flash('signupMessage') });
});

// process the signup form
// router.post('/signup', do all our passport stuff here);

router.get('/logout', function(req, res){
	req.logout();
	res.render('/');
})

module.exports = router;
