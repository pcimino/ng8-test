import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-header-unauth',
  templateUrl: './page-header-unauth.component.html',
  styleUrls: ['./page-header-unauth.component.css']
})
export class PageHeaderUnauthComponent implements OnInit {

  userInfo:UserInfo

  constructor(private router: Router,
      private authSvc: AuthService,
      private toastr: ToastrService) {
  }

  ngOnInit() {

  }

  mockLogin() {
    this.toastr.success("isUserLoggedIn", this.authSvc.isAuthenticated())

    this.authSvc.login();
    this.toastr.success("isUserLoggedIn", this.authSvc.isAuthenticated())

    if (this.authSvc.isAuthenticated()) {
        this.router.navigate(['dashboard']);
        this.toastr.success('Welcome', 'You are logged in');
    } else {
        this.toastr.error('Sorry', 'Try again');
    }
  }

}