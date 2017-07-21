const mongoose = require('mongoose');
const config = require('../config/database');

// task schema
const TaskSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	isComplete: {
		type: Boolean,
		required: true
	}
});

module.exports = mongoose.model('Task', TaskSchema);
const Task = mongoose.model('Task', TaskSchema);

// get one task
module.exports.getTaskById = function (id, callback) {
	Task.findById(id, callback);
}

// get all tasks
module.exports.getAllTasks = function (callback) {
	Task.find({}, callback);
}

// add a new task
module.exports.addTask = function (newTask, callback){
	newTask.save(callback);
}

// update task
module.exports.updateTask = function (updateTask, callback){
	this.getTaskById(updateTask._id, function (err, task) {
		if (err) throw err;
		if (task) {
			task.title = updateTask.title;
			task.isComplete = updateTask.isComplete;
			task.save(callback);
		}
	})
}