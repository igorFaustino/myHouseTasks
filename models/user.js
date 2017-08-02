const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// user schema
const UserSchema = mongoose.Schema({
	name: {
		type: String
	},
	email: {
		type: String,
		required: true,
		unique:true
	},
	username: {
		type: String,
		required: true,
		unique:true
	},
	password: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('User', UserSchema);
const User = mongoose.model('User', UserSchema);

// get a single user by the id
module.exports.getUserById = function (id, callback) {
	User.findById(id, callback);
}

// get a single user by the username
module.exports.getUserByUsername = function (username, callback) {
	const query = {
		username: username			
	};
	User.findOne(query, callback);
}

// add a new user
module.exports.addUser = function (newUser, callback) {
	bcrypt.genSalt(10, function (err, salt){
		bcrypt.hash(newUser.password, salt, function (err, hash) {
			if (err) throw err;
			newUser.password = hash;
			newUser.save(callback);
		})
	});
}

// compare the inputed password with the saved password
module.exports.comparePassword = function (candidatePassword, hash, callback) {
	bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
		if(err) throw err;
		callback(null, isMatch);
	})
}

// update user data
module.exports.updateUser = function (updatedUser, callback) {
	this.getUserById(updatedUser._id, function (err, user) {
		if (err) throw  err;
		if (user) {
			user.name = updatedUser.name;
			user.username = updatedUser.username;
			user.email = updatedUser.email;
			user.save(callback);
		}
	});
}