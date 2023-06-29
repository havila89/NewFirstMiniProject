import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  CanActivateChild,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './services/authservice.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MemberAuthGuard implements CanActivateChild {
  constructor(
    private authservice: AuthserviceService,
    private router: Router
  ) {}
  /*canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authservice.MemberAuth) {
      return true;
    } else {
      this.router.navigate(['']);
      window.alert('You dont have access!!Please connect to administrator');
    }
  }*/
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authservice.MemberAuth) {
      return true;
    } else {
      this.router.navigate(['']);
      window.alert('You dont have access!!! Please connect to Administrator ');
      return false;
    }
  }
}
