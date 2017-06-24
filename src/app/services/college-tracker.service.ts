import { Injectable } from '@angular/core';
import {AppConstants} from "../shared/app-constants";
import {Observable, Subject} from "rxjs";
import {environment} from "../../environments/environment";
import {RequestOptions, Headers, Http} from "@angular/http";
import {StorageService} from "./storage.service";

@Injectable()
export class CollegeTrackerService {
  private observableResource = new Subject<string>();
  menuResource$ = this.observableResource.asObservable();

  constructor(private http: Http,
              private storage: StorageService) { }

  private addAuthorizationBearer(headers){
    let authToken = this.storage.read<string>(AppConstants.AUTH_TOKEN_KEY);
    headers.append('Authorization','Bearer ' + authToken);
  }

  login(loginData) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers, withCredentials: true });
    let authUrl = `${environment.collegeTrackerApiUrl}/apptracker/v1/login`;
    return this.http.post(authUrl, loginData, options)
      .map(this.extractData)
      .catch(this.handleError.bind(this));
  }

  collegeList() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.addAuthorizationBearer(headers);
    let options = new RequestOptions({ headers: headers, withCredentials: true });
    let collegeListUrl = `${environment.collegeTrackerApiUrl}/apptracker/v1/colleges`;
    return this.http.get(collegeListUrl, options)
      .map(this.extractData)
      .catch(this.handleError.bind(this));
  }

  extractData(res) {
    let body = res.json();
    return body || { };
  }

  handleError(error) {
    if (error.status === 401) {
      // Session expired
      let data = this.extractData(error);
      console.error(AppConstants.GENERIC_ERROR_MESSAGE + '(' + error.status + ')');
      window.location.href = "/login";
    }
    else if (error.status === 403) {
      console.error(AppConstants.GENERIC_ERROR_MESSAGE + '(' + error.status + ')');
      window.location.href = "/404";
    }
    else {
      return Observable.throw(error.status);
    }
  }

  isLoggedIn(){
    let token = this.storage.read<string>(AppConstants.AUTH_TOKEN_KEY);
    if (token)
      return true;
    return false;
  }

  reloadMenuBarOnSuccessfulLogin(){
    this.observableResource.next('login_success');
  }

  reloadMenuBarOnSuccessfulLogout(){
    this.observableResource.next('logout_success');
  }
}
