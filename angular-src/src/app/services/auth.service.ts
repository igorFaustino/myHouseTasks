import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {
	authToken: any;
	user: any;

	constructor(private http: Http) { }

	registerUser(user){
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post('http://localhost:5000/users/register', user, {headers: headers})
			.map(res => res.json());
	}

	login(user){
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post('http://localhost:5000/users/authenticate', user, {headers: headers})
			.map(res => res.json());
	}

	loggedIn() {
  		return tokenNotExpired('id_token');
	}

	getProfile(){
		let headers = new Headers();
		this.loadToken();
		headers.append('Content-Type', 'application/json');
		headers.append('Authorization', this.authToken);
		return this.http.get('http://localhost:5000/users/profile', {headers: headers})
			.map(res => res.json());
	}

	storeUserData(token, user){
		localStorage.setItem('id_token', token);
		localStorage.setItem('user', JSON.stringify(user));
		this.authToken = token;
		this.user = user;
	}

	storeUser(updatedUser){
		localStorage.setItem('user', JSON.stringify(updatedUser));
		this.user = updatedUser;
	}

	logout(){
		this.authToken = null;
		this.user = null;
		localStorage.clear();
	}

	loadToken(){
		const token = localStorage.getItem('id_token');
		this.authToken = token;
	}

	updateUser(updatedUser){
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.put('http://localhost:5000/users/update', updatedUser, {headers: headers})
			.map(res => res.json());
	}

	updatePassword(id, updatedPassword){
		let headers = new Headers();
		this.loadToken();
		headers.append('Content-Type', 'application/json');
		headers.append('Authorization', this.authToken);
		return this.http.put('http://localhost:5000/users/update/' + id, updatedPassword, {headers: headers})
			.map(res => res.json());

	}

}
