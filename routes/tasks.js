var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var dbconfig = require('../dbconfig');
var db = mongojs();

router.get('/tasks', function (req, res, next) {
	db.inventory.find(function(err, tasks){
		if(err){
			res.send(err);
		}
		res.json(tasks);
	});
});

module.exports = router;