import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

	constructor() { }

	validateRegister(user){
		if (user.name == undefined || user.username ==
		  undefined || user.email == undefined || user.password ==
		  undefined || user.confirmPassword == undefined || user.confirmEmail == undefined) {
			return false;
		} else {
			return true;
		}
	}

	validatePassword(password, confirmPassword) {
		if (password == confirmPassword){
			return true;
		} else {
			return false;
		}
	}

	validateEmail(email){
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	validateConfirmEmail(email, confirmEmail){
		if (email == confirmEmail){
			return true;
		} else {
			return false;
		}
	}

	validateLogin(user){
		if (user.username == undefined || user.password == undefined){
			return false;
		} else {
			return true;
		}
	}

}
