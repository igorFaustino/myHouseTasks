import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'ngx-flash-messages';


@Component({
	selector: 'navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	constructor(
		private validateService: ValidateService,
		private authService: AuthService,
		private router: Router,
		private flashMessagesServices: FlashMessagesService
	) { }

	ngOnInit() {
	}

	onLogoutClick(){
		this.authService.logout();
		this.flashMessagesServices.show('Usuario desconectado', {classes: ['alert', 'alert-info', 'text-center']})
	}
}
