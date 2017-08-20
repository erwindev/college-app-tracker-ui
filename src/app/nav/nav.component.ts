import { Component, OnInit } from '@angular/core';
import {CollegeTrackerService} from "../services/college-tracker.service";
import {Router} from "@angular/router";
import {StorageService} from "../services/storage.service";
import {AppConstants} from "../shared/app-constants";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public isLoggedIn: boolean;

  constructor(private collegeTrackerService: CollegeTrackerService,
              private router: Router,
              private storage: StorageService) {
    collegeTrackerService.menuResource$.subscribe(
      data => {
        this.setNav();
      }
    );
    this.setNav();
  }

  ngOnInit() {
  }

  setNav(){
    this.isLoggedIn = this.collegeTrackerService.isLoggedIn();
  }

  logout(){
    this.storage.clear();
    this.collegeTrackerService.reloadMenuBarOnSuccessfulLogout();
    this.router.navigate([AppConstants.LOGIN_ROUTE]);
  }

}
