import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	user: object;
	updatedUser: {
		_id?: any,
		name?: any,
		email?: any,
		username?: any,
		password?: any
	};
	validateEmail = true;

	constructor(
		private authService: AuthService,
		private validateService: ValidateService,
		private router: Router,
		private flashMessagesServices: FlashMessagesService
	) { }

	ngOnInit() {
		this.authService.getProfile().subscribe(profile => {
			this.user = profile.user;
			this.updatedUser = Object.assign({}, this.user);
		})
	}

	// validate email
	onKeyUpEmail(event: any){
		if(!this.validateService.validateEmail(this.updatedUser.email)){
			this.validateEmail = false;
		} else {
			this.validateEmail = true;
		}
	}

	onUpdateSubmit() {
		const updatedUser = Object.assign({}, this.updatedUser);
		console.log(updatedUser);
		this.authService.updateUser(updatedUser).subscribe(data =>{
			if (data.success){
				this.flashMessagesServices.show('Usuario atualizado com sucesso!', {classes: ['alert', 'alert-success', 'text-center']});
				this.authService.storeUser(updatedUser);
				this.user = updatedUser;
			} else {
				this.flashMessagesServices.show('Algo de errado não esta certo!\nPor favor tente de novo', {classes: ['alert', 'alert-danger', 'text-center']});
			}
		});
	}

}
