var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var dbconfig = require('../dbconfig');
var db = mongojs('mongodb://' + dbconfig.user + ':' + dbconfig.password + '@ds163340.mlab.com:63340/housetask_cm', ['tasks']);

// get all tasks
router.get('/tasks', function (req, res, next) {
	db.tasks.find(function(err, tasks){
		if(err){
			res.send(err);
		}
		res.json(tasks);
	});
});

// get a single task
router.get('/task/:id', function (req, res, next) {
	db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
		if(err){
			res.send(err);
		}
		res.json(task);
	});
});

// Save Task
router.post('/task', function(req, res, next){
	var task = req.body;
	if (!task.title) {
		res.status(400);
		res.json({
			"error": "Bad Data"
		});
	} else {
		db.tasks.save(task, function(err, task){
			if(err){
				res.send(err);
			}
			res.json(task);
		});
	}
});

// Delete task
router.delete('/task/:id', function (req, res, next) {
	db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
		if(err){
			res.send(err);
		}
		res.json(task);
	});
});

// Update Task
router.put('/task/:id', function (req, res, next) {
	var task = req.body;
	var updTask = {};

	if(task.title){
		updTask.title = tasks.title;
	}
	if (task.isDone){
		updTask.isDone = tasks.isDone;	
	}
	if (!updTask){
		res.status(400);
		res.json({
			"error":"Bad Data"
		});
	} else {
		db.tasks.update({_id: mongojs.ObjectId(req.params.id)}, updTask, {}, function(err, task){
			if(err){
				res.send(err);
			}
			res.json(task);
		});
	}
});

module.exports = router;