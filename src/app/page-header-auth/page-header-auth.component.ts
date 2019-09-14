import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { UserInfo } from '../classes/user-info';

@Component({
  selector: 'app-page-header-auth',
  templateUrl: './page-header-auth.component.html',
  styleUrls: ['./page-header-auth.component.css']
})
export class PageHeaderAuthComponent implements OnInit {

  userInfo:UserInfo

  constructor(private router: Router,
      private authSvc: AuthService,
      private apiSvc: APIService,
      private toastr: ToastrService) {
        this.loadUserInfo();
  }

  ngOnInit() {

  }

  loadUserInfo() {
    this.apiSvc.getUserInfo().subscribe((res)=>{
        this.userInfo = res[0];
    },
    res => {
          this.toastr.error('Error', res.error.error);
    });
  }

  mockLogout() {
    this.authSvc.logout();
    this.toastr.warning('Session Ended', 'Your are logged out');
    this.router.navigate(['login']);
  }
}