var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var dbconfig = require('../dbconfig');
var db = mongojs('mongodb://' + dbconfig.user + ':' + dbconfig.password + '@ds163340.mlab.com:63340/housetask_cm', ['tasks']);

router.get('/tasks', function (req, res, next) {
	db.tasks.find(function(err, tasks){
		if(err){
			res.send(err);
		}
		res.json(tasks);
	});
});

module.exports = router;