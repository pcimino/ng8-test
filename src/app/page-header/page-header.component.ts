import { Component, OnInit } from '@angular/core';
import { UserStatusService } from '../services/user-status.service';
import { APIService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { UserInfo } from '../classes/user-info';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  userInfo:UserInfo

  constructor(private userStatusSvc: UserStatusService,
      private apiService: APIService,
      private toastr: ToastrService) {
  }

  ngOnInit() {

  }

  isUserLoggedIn() {
    return this.userStatusSvc.getUserStatus();
  }

  isUserLoggedOut() {
    return !this.userStatusSvc.getUserStatus();
  }

  mockLogin() {
    this.toastr.success('Welcome', 'Your are logged in');
    this.userStatusSvc.setUserStatus(true);
    this.userInfo = this.apiService.getUserInfo()
  }

  mockLogout() {
    this.toastr.warning('Session Ended', 'Your are logged out');
    this.userStatusSvc.setUserStatus(false);
  }
}