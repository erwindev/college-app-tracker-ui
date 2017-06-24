import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from "./app.routes";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {CollegeTrackerServiceService} from "./services/college-tracker-service.service";
import { CollegeListComponent } from './college-list/college-list.component';
import { CollegeDetailComponent } from './college-detail/college-detail.component';
import { CollegeApplyListComponent } from './college-apply-list/college-apply-list.component';
import {SpinnerService} from "./services/spinner.service";
import { LandingComponent } from './landing/landing.component';
import {StorageService} from "./services/storage.service";
import {AccessControlService} from "./services/access-control.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    NotFoundComponent,
    CollegeListComponent,
    CollegeDetailComponent,
    CollegeApplyListComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
  ],
  providers: [
    CollegeTrackerServiceService,
    SpinnerService,
    StorageService,
    AccessControlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
