import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserStatusService } from '../services/user-status.service';

@Injectable()
export class NeedAuthGuard implements CanActivate {

  constructor(private userStatus: UserStatusService, private router: Router) {
  }

  canActivate() {

    const redirectUrl = route['routerState']['url'];

    if (this.userStatus.isLogged()) {
      return true;
    }

    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['/login'], {
          queryParams: {
            redirectUrl
          }
        }
      )
    );

    return false;
  }
}