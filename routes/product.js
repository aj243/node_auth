var express = require('express');
var router = express.Router();

router.get('/', isLoggedIn, function(req, res) {
	res.render('index', {
		user : req.user // get the user out of session and pass to template
	});
});