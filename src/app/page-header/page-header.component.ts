import { Component, OnInit } from '@angular/core';
import {UserStatusService} from '../services/user-status.service';
import {UserInfoService} from '../services/user-info.service';


@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  userStatus:any
  userInfo:any

  constructor(private userStatusService: UserStatusService,
      private userInfoService: UserInfoService) {
    this.userStatus = userStatusService.getUserStatus()
    this.userInfo = userInfoService.getUserInfo()
  }

  ngOnInit() {

  }

  isUserLoggedIn() {
    return this.userStatus;
  }

  isUserLoggedOut() {
    return !this.userStatus;
  }
}
