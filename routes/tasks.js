const express = require('express');
const router = express.Router();
const passport = require('passport');
const Task = require('../models/task');

// get all tasks
router.get('/tasks', passport.authenticate('jwt', { session: false}), function (req, res, next) {
	Task.getAllTasks(function (err, task) {
		if (err) {
			res.send(err);
		}
		res.json(task);
	});
});

// get a single task
router.get('/task/:id', passport.authenticate('jwt', { session: false}), function (req, res, next) {
	Task.getTaskById(req.params.id, function(err, task){
		if(err){
			res.send(err);
		}
		res.json(task);
	});
});

// Save Task
router.post('/task', passport.authenticate('jwt', { session: false}), function(req, res, next){
	let newTask = new Task({
		title: req.body.title,
		isComplete: req.body.isComplete
	});

	Task.addTask(newTask, function (err, task) {
		if (err){
			res.json({success: false, msg: 'Failed to add task'});
		} else {
			res.json({success: true, msg: 'task registered', task: task});

		}
	});
});

// Update Task
router.put('/task', passport.authenticate('jwt', { session: false}), function (req, res, next) {
	var updatedTask = req.body;
	Task.updateTask(updatedTask, function (err, task) {
		if (err) {
			res.json({success: false, msg: 'Failed to update task'});
		} else {
			res.json({success: true, msg: 'task updated'});
		}
	});
});

// Delete Task
router.delete('/task/:id', passport.authenticate('jwt', { session: false}), function (req, res, next) {
	var id = req.params.id;
	Task.deleteTask(id, function (err, task) {
		if (err) {
			res.json({success: false, msg: 'Failed to delete task'});
		} else {
			res.json({success: true, msg: 'task deleted'});
		}
	});
});

module.exports = router;