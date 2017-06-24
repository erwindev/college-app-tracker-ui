// Route Configuration
import { ModuleWithProviders }  from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {LandingComponent} from "./landing/landing.component";
import {AccessControlService} from "./services/access-control.service";

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: LandingComponent, canActivate: [AccessControlService]},
  { path: '404', component: NotFoundComponent },
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
