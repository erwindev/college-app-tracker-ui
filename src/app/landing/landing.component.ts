import { Component, OnInit } from '@angular/core';
import {StorageService} from "../services/storage.service";
import {AppConstants} from "../shared/app-constants";
import {SpinnerService} from "../services/spinner.service";
import {Router} from "@angular/router";
import {CollegeTrackerService} from "../services/college-tracker.service";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public studentInfo;
  public collegeData;

  constructor(private storageService: StorageService,
              private spinner: SpinnerService,
              private collegeTrackerService: CollegeTrackerService,
              private router: Router) { }

  ngOnInit() {
    this.studentInfo = JSON.parse(this.storageService.read<string>(AppConstants.STUDENT_INFO_KEY));
  }

  listColleges(){
    this.spinner.display(true);
    this.collegeTrackerService.collegeList()
      .subscribe(
        data => {
          this.collegeData = data.colleges;
          //token is refreshed so save it in local storage
          if (data.token) {
            this.storageService.write(AppConstants.AUTH_TOKEN_KEY, data.token);
          }
          this.spinner.display(false);
        },
        error => {
          this.spinner.display(false);
        }
      );
  }

}
