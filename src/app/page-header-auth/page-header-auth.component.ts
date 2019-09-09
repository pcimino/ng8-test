import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-header-auth',
  templateUrl: './page-header-auth.component.html',
  styleUrls: ['./page-header-auth.component.css']
})
export class PageHeaderAuthComponent implements OnInit {

  userInfo:UserInfo

  constructor(private router: Router,
      private authSvc: AuthService,
      private apiService: APIService,
      private toastr: ToastrService) {
  }

  ngOnInit() {

  }

  mockLogout() {
    this.authSvc.logout();
    this.toastr.warning('Session Ended', 'Your are logged out');
    this.router.navigate(['login']);
  }
}