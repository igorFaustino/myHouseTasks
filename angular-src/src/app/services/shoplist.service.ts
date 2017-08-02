import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';

@Injectable()
export class ShoplistService {

	constructor(
		private http: Http,
		private authService: AuthService
	) { }

	getLists(){
		this.authService.loadToken();
		let headers = new Headers;
		headers.append('Authorization', this.authService.authToken);
		return this.http.get('http://localhost:5000/api/lists', {headers: headers})
			.map(res => res.json());
	}

	getList(id){
		this.authService.loadToken();
		let headers = new Headers;
		headers.append('Authorization', this.authService.authToken);
		return this.http.get('http://localhost:5000/api/list/'+id, {headers: headers})
			.map(res => res.json());
	}

	addList(newList){
		this.authService.loadToken();
		let headers = new Headers;
		headers.append('Authorization', this.authService.authToken);
		headers.append('Content-Type', 'application/json');
		return this.http.post('http://localhost:5000/api/list', newList, {headers: headers})
			.map(res => res.json());
	}

	deleteList(id){
		this.authService.loadToken();
		let headers = new Headers;
		headers.append('Authorization', this.authService.authToken);
		return this.http.delete('http://localhost:5000/api/list/'+id, {headers: headers})
			.map(res => res.json());
	}

	updateList(updatedList){
		this.authService.loadToken();
		let headers = new Headers;
		headers.append('Authorization', this.authService.authToken);
		headers.append('Content-Type', 'application/json');
		return this.http.put('http://localhost:5000/api/list', updatedList, {headers: headers})
			.map(res => res.json());
	}

}
