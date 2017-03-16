var express = require('express');
var router = express.Router();

router.get('/', isLoggedIn, function(req, res) {
	res.render('./products/index', {
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