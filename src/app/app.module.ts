import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from "./app.routes";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CollegeListComponent } from './college-list/college-list.component';
import { CollegeDetailComponent } from './college-detail/college-detail.component';
import { CollegeApplyListComponent } from './college-apply-list/college-apply-list.component';
import {SpinnerService} from "./services/spinner.service";
import { LandingComponent } from './landing/landing.component';
import {StorageService} from "./services/storage.service";
import {AccessControlService} from "./services/access-control.service";
import {DataTableModule} from "angular2-datatable";
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {CollegeTrackerService} from "./services/college-tracker.service";

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
    AboutUsComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    DataTableModule,
  ],
  providers: [
    CollegeTrackerService,
    SpinnerService,
    StorageService,
    AccessControlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
