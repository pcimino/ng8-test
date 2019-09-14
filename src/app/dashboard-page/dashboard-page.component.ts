import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { UserInfo } from '../classes/user-info';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  userInfo:UserInfo

  constructor(
      private apiSvc: APIService,
      private toastr: ToastrService) {
      }

  ngOnInit() {
    this.loadUserInfo();
  }

  loadUserInfo() {
    this.apiSvc.getUserInfo().subscribe((res)=>{
        this.userInfo = res[0];
    },
    res => {
          this.toastr.error('Error', res.error.error);
    });
  }
}
