const express = require('express');
const router = express.Router();

// REGISTER
router.get('/register', function (req, res, next) {
	res.send('REGISTER');
});

// AUTHENTICATE
router.get('/authenticate', function (req, res, next) {
	res.send('AUTHENTICATE');
});

// PROFILE
router.get('/profile', function (req, res, next) {
	res.send('PROFILE');
});

// VALIDATE
router.get('/validate', function (req, res, next) {
	res.send('VALIDATE');
});

module.exports = router;