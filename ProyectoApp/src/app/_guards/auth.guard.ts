import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';
import {AuthenticationService} from "../_services";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _authService:AuthenticationService,
                private _router:Router) { }

    canActivate( ):boolean {
        if (this._authService.loggedIn() ) {
            // logged in so return true
            return true;
        } else {
          // not logged in so redirect to login page with the return url
          this._router.navigate(['/login']);
          return false;
        }
    }
}
