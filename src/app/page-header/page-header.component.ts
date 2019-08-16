import { Component, OnInit } from '@angular/core';
import {UserStatusService} from '../services/user-status.service';
import {UserInfoService} from '../services/user-info.service';


@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  userInfo:any
  userStatusService:UserStatusService

  constructor(private userStatusSvc: UserStatusService,
      private userInfoService: UserInfoService) {
    this.userStatusService = userStatusSvc
    this.userInfo = userInfoService.getUserInfo()
  }

  ngOnInit() {

  }

  isUserLoggedIn() {
    return this.userStatusService.getUserStatus();
  }

  isUserLoggedOut() {
    return !this.userStatusService.getUserStatus();
  }

  mockLogin() {
    this.userStatusService.setUserStatus(true);
  }

  mockLogout() {
    this.userStatusService.setUserStatus(false);
  }
}