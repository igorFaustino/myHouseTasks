import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	name: string;
	username: string;
	password: string;
	confirmPassword: string;
	email: string;
	confirmEmail: string;

	// validation
	validateAllFields: boolean;
	validateEmail: boolean;
	validateConfirmEmail: boolean;
	validatePassword: boolean;

	constructor(
		private validateService: ValidateService,
		private authService: AuthService,
		private router: Router,
		private flashMessagesServices: FlashMessagesService
	) { }

	ngOnInit() {
	}

	// validate email
	onKeyUpEmail(event: any){
		if(!this.validateService.validateEmail(this.email)){
			this.validateEmail = false;
		} else {
			this.validateEmail = true;
		}
	}

	// validate confirmEmail
	onKeyUpConfirmEmail(event: any){
		if(!this.validateService.validateConfirmEmail(this.email, this.confirmEmail)){
			this.validateConfirmEmail = false;
		} else {
			this.validateConfirmEmail = true;
		}
	}

	// validate password
	onKeyUpPassword(event: any){
		if(!this.validateService.validatePassword(this.password, this.confirmPassword)){
			this.validatePassword = false;
		} else {
			this.validatePassword = true;
		}
	}

	onRegisterSubmit(){
		const user = {
			name: this.name,
			username: this.username,
			email:	this.email,
			confirmEmail: this.confirmEmail,
			password: this.password,
			confirmPassword: this.confirmPassword
		};		

		// require fields
		if(!this.validateService.validateRegister(user)){
			this.validateAllFields = false;
			this.flashMessagesServices.show('Por favor preencha todos os campos!', {classes: ['alert', 'alert-danger', 'text-center']});
		} else {
			this.validateAllFields = true;
		}

		// return if something is wrong...
		if (!this.validateAllFields || !this.validatePassword || !this.validateEmail || !this.validateConfirmEmail){
			return false;
		}

		// register user
		this.authService.registerUser(user).subscribe(data => {
			if (data.success){
				this.flashMessagesServices.show('Usuario registrado com sucesso!', {classes: ['alert', 'alert-success', 'text-center']});
				this.router.navigate(['/login']);
			} else {
				this.flashMessagesServices.show('Algo de errado não esta certo!\nPor favor tente de novo', {classes: ['alert', 'alert-danger', 'text-center']});
			}
		});
	}
}
