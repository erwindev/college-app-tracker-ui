// Route Configuration
import { ModuleWithProviders }  from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {LandingComponent} from "./landing/landing.component";
import {AccessControlService} from "./services/access-control.service";
import {CollegeListComponent} from "./college-list/college-list.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'dashboard', component: LandingComponent, canActivate: [AccessControlService]},
  { path: '404', component: NotFoundComponent },
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
