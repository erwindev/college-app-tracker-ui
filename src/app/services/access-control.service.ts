import { Injectable } from '@angular/core';
import {Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {StorageService} from "./storage.service";
import {AppConstants} from "../shared/app-constants";

@Injectable()
export class AccessControlService implements CanActivate{

  constructor(private router: Router,
              private storage: StorageService){
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {

    let authToken = this.storage.read<string>(AppConstants.AUTH_TOKEN_KEY);

    if (authToken == null){
      this.router.navigate([AppConstants.LOGIN_ROUTE]);
      return false;
    }

    return true;
  }

}
