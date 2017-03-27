var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var productModel = mongoose.model('Product');
var file = require('file-system');// file system
var fs = require('fs');
var pdf = require('html-pdf');

// Check for authentication
router.all('*',function(req,res,next){
	if(req.isAuthenticated()){
		next();
	}else{
		res.redirect('/');
	}
});

// GET product listing
router.get('/', function(req, res) {
	productModel.find(function(err, products){
		if(err) return res.sendStatus(500);
		res.render('products/index', {
			product : products
		});
	});
});

// show product details
router.get('/:obj_id', function(req, res){
	obj_id = req.params.obj_id;
	productModel.findOne({_id : obj_id}, function(err, products){
		if(err) return res.sendStatus(500);
		res.render('products/show', {
			product : products,
		});
	});
});

module.exports = router;