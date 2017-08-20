import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder} from "@angular/forms";
import {AppConstants} from "../shared/app-constants";
import {SpinnerService} from "../services/spinner.service";
import {Router} from "@angular/router";
import {StorageService} from "../services/storage.service";
import {CollegeTrackerService} from "../services/college-tracker.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userData;
  public errorMessage;
  public successMessage;

  public loginForm = this.fb.group({
    email: ["", [Validators.required]],
    password: ["", [Validators.required]],
  });

  constructor(private fb: FormBuilder,
              private router: Router,
              private collegeTrackerService: CollegeTrackerService,
              private storageService: StorageService,
              private spinnerService: SpinnerService) { }

  ngOnInit() {
  }

  login(){
    this.spinnerService.display(true);
    this.collegeTrackerService.login(this.loginForm.value)
      .subscribe(
        data => {
          this.userData = data;
          if (this.userData.status == AppConstants.ERROR_STATUS){
            this.showErrorMessage(this.userData.message);
          }
          else{
            this.storageService.write(AppConstants.AUTH_TOKEN_KEY, this.userData.token);
            this.storageService.write(AppConstants.STUDENT_INFO_KEY, JSON.stringify(this.userData.student));
            this.collegeTrackerService.reloadMenuBarOnSuccessfulLogin();
            this.router.navigate([AppConstants.DASHBOARD_ROUTE]);
          }
          this.spinnerService.display(false);
        },
        error => {
          if (error === 404) {
            this.showErrorMessage(AppConstants.GENERIC_ERROR_MESSAGE + '(' + error + ')');
            this.userData = [];
          } else {
            this.showErrorMessage(AppConstants.GENERIC_ERROR_MESSAGE + '(' + error + ')');
          }
          this.spinnerService.display(false);
        }
      );
  }

  hideMessages() {
    this.successMessage = null;
    this.errorMessage = null;
  }

  showErrorMessage(message) {
    this.errorMessage = message;
    this.successMessage = null;
  }

}
