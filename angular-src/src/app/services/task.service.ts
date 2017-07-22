import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';


@Injectable()
export class TaskService {

	constructor(
		private http: Http,
		private authService: AuthService
	) { }

	getTasks(){
		this.authService.loadToken();
		let headers = new Headers;
		headers.append('Authorization', this.authService.authToken);
		return this.http.get('http://localhost:5000/api/tasks', {headers: headers})
			.map(res => res.json());
	}

	addTask(newTask){
		this.authService.loadToken();
		let headers = new Headers;
		headers.append('Authorization', this.authService.authToken);
		headers.append('Content-Type', 'application/json');
		return this.http.post('http://localhost:5000/api/task', newTask, {headers: headers})
			.map(res => res.json());
	}

	deleteTask(id){
		this.authService.loadToken();
		let headers = new Headers;
		headers.append('Authorization', this.authService.authToken);
		return this.http.delete('http://localhost:5000/api/task/'+id, {headers: headers})
			.map(res => res.json());
	}

	updateTask(updatedTask){
		this.authService.loadToken();
		let headers = new Headers;
		headers.append('Authorization', this.authService.authToken);
		headers.append('Content-Type', 'application/json');
		return this.http.put('http://localhost:5000/api/task', updatedTask, {headers: headers})
			.map(res => res.json());
	}
}
