// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'ngx-flash-messages';

// My components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { ShoplistComponent } from './components/shoplist/shoplist.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';

// services
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { TaskService } from './services/task.service';



const routes: Routes = [
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
	{ path: 'register', component: RegisterComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'profile' , component: ProfileComponent, canActivate: [AuthGuardService] },
	{ 
		path: 'dashboard' , component: DashboardComponent, canActivate: [AuthGuardService], children: [
			{ path: '' , component: HomeComponent },
			{ path: 'tasks' , component: TasklistComponent },
			{ path: 'shoplist' , component: ShoplistComponent }			
		]
	},
	{ path: '**', redirectTo:'dashboard' }
];

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		LoginComponent,
		RegisterComponent,
		HomeComponent,
		DashboardComponent,
		ProfileComponent,
		TasklistComponent,
		ShoplistComponent,
		SidebarComponent,
		FooterComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes),
		FormsModule,
		HttpModule,
		FlashMessagesModule
	],
	providers: [
		ValidateService,
		AuthService,
		AuthGuardService,
		TaskService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
