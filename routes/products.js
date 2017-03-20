var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var productModel = mongoose.model('Product');

// var product1 = new productModel;
// mongoose.model('users').find();
// console.log(product);

// GET product listing
router.get('/', isLoggedIn, function(req, res) {
	res.render('products/index', {
		user : req.user, // get the user out of session and pass to template
		product : productModel
		// product : req.product
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