const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

// REGISTER
router.post('/register', function (req, res, next) {
	let newUser = new User({
		name: req.body.name,
		email: req.body.email,
		username: req.body.username,
		password: req.body.password
	});

	User.addUser(newUser, function (err, user) {
		if (err){
			res.json({success: false, msg: 'Failed to register user'});
		} else {
			res.json({success: true, msg: 'user registered'});

		}
	});
});

// AUTHENTICATE
router.post('/authenticate', function (req, res, next) {
	username = req.body.username;
	password = req.body.password;

	User.getUserByUsername(username, function (err, user) {
		if(err) throw err;
		if(!user){
			return res.json({success: false, msg: 'User not found'});
		}

		User.comparePassword(password, user.password, function (err, isMatch) {
			if(isMatch){
				const token = jwt.sign(user, config.secret);
				res.json({
					success: true,
					token: 'JWT ' + token,
					User: {
						id: user._id,
						name: user.name,
						username: user.username,
						email: user.email
					}
				});
			} else {
				return res.json({succes: false, msg: 'Wrong password'});
			}
		});
	});
});

// UPDATE USER
router.put('/update', passport.authenticate('jwt', { session: false}), function (req, res, next) {
	updatedUser = req.body;
	User.updateUser(updatedUser, function (err, user) {
		if (err) {
			res.json({success: false, msg: 'Failed to update user'});
		} else {
			res.json({success: true, msg: 'User updated'});
		}
	});
});

// UPDATE PASSWORD
router.put('/update/:id', passport.authenticate('jwt', { session: false}), function (req, res, next) {
	id = req.params.id;
	updatedPassword = req.body.password;
	User.updatePassword(id, updatedPassword, function (err, user) {
		if (err) {
			res.json({success: false, msg: 'Failed to update password'});
		} else {
			res.json({success: true, msg: 'Password updated'});
		}
	});
});

// PROFILE
router.get('/profile', passport.authenticate('jwt', { session: false}), function (req, res, next) {
	res.json({user: req.user});
});

module.exports = router;