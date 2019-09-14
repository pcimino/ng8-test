import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';
import { TrackInfo } from '../classes/track-info';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-left-list',
  templateUrl: './left-list.component.html',
  styleUrls: ['./left-list.component.css']
})
export class LeftListComponent implements OnInit {

  trackInfoList:any

  constructor(private apiSvc: APIService,
      private toastr: ToastrService) { }

  ngOnInit() {
    this.loadTrackInfo();
  }

  loadTrackInfo() {
    this.apiSvc.getTrackInfo().subscribe((res)=>{
        this.trackInfoList = res;
    },
    res => {
          this.toastr.error('Error', res.error.error);
    });
  }
}
