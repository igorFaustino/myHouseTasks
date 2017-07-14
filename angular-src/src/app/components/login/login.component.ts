import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	username: string;
	password: string;
	msg: string;

	constructor(
		private validateService: ValidateService,
		private authservice: AuthService,
		private router: Router,
		private flashMessageService: FlashMessagesService
	) { }

	ngOnInit() {
	}

	onLoginSubmit(){
		const user = {
			username: this.username,
			password: this.password
		};

		// validate login
		if (!this.validateService.validateLogin(user)){
			return false;
		}
		this.authservice.login(user).subscribe(data => {
			if (data.success){
				this.authservice.storeUserData(data.token, data.User)
				this.flashMessageService.show('Login realizado com sucesso', {classes: ['alert', 'alert-success', 'text-center']})
				this.router.navigate(['/dashboard']);
			} else {
				this.flashMessageService.show(data.msg, {classes: ['alert', 'alert-danger', 'text-center'],
					timeout: 4000
				})
			}
		});
	}
}
