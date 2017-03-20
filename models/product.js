var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var productSchema = new Schema({
	title: String,
	author: String,
	summary: String,
	price: Number,
	category: String,
	language: String,
	details: String,
	pages : Number
});

module.exports = mongoose.model('Product', productSchema);