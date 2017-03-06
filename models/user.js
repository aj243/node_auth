var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new Schema({
    // username: String,
		email: String,
    password: String
});

// generating encrypted password
userSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password);
}

// comparing passwords
userSchema.methods.vaildPassword = function(password){
	bcrypt.compareSync(password, this.local.password); 
}


module.exports = mongoose.model('User', userSchema);