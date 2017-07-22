import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
	selector: 'app-tasklist',
	templateUrl: './tasklist.component.html',
	styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
	tasks: {
		_id: any,
		title: string,
		isComplete: boolean
	}[];
	completeTask: number;
	newTitle: string;

	constructor(
		private taskService: TaskService,
		private flashMessagesService: FlashMessagesService
	) { }

	setTasks(){
		this.taskService.getTasks().subscribe(tasks => {
			this.tasks = tasks;
			this.setCompletedTasks(this.tasks);
		})	
	}

	setCompletedTasks(tasks) {
		this.completeTask = 0;
		for (var task = tasks.length - 1; task >= 0; task--) {
			if(tasks[task].isComplete){
				this.completeTask++;
			}
		}
	}

	ngOnInit() {
		this.setTasks();
	}

	addTask(){
		let newTask = {
			title: this.newTitle,
			isComplete: false
		}
		this.newTitle = "";
		this.taskService.addTask(newTask).subscribe(res => {
			if (res.success) {
				this.tasks.push(res.task);
			} else {
				this.flashMessagesService.show('Algo de errado não está certo... porfavor tente novamente!', {classes: ['alert', 'alert-danger', 'text-center']});
			}
		})
	}

	updateTask(task){
		let updatedTask = {
			_id: task._id,
			title: task.title,
			isComplete: !task.isComplete
		}
		this.taskService.updateTask(updatedTask).subscribe(res => {	});
	}

	onCheck(event: any, task){
		if (!task.isComplete)
			this.completeTask++;
		else {
			this.completeTask--;
		}
		this.updateTask(task);
	}

	clean(){
		this.completeTask = 0;
		for (var task = 0; task < this.tasks.length; ++task) {
			if (this.tasks[task].isComplete){
				this.taskService.deleteTask(this.tasks[task]._id).subscribe(res => {
					if (!res.success){
						this.flashMessagesService.show('Algo de errado não está certo... porfavor tente novamente!', {classes: ['alert', 'alert-danger', 'text-center']});
						return false;
					}
				});
			}
		}
		this.tasks = this.tasks.filter(function (task){
			return !task.isComplete;
		});
	}

}
