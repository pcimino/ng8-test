import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';
import { TrackInfo } from '../classes/track-info';

@Component({
  selector: 'app-left-list',
  templateUrl: './left-list.component.html',
  styleUrls: ['./left-list.component.css']
})
export class LeftListComponent implements OnInit {

  trackInfoList:TrackInfo

  constructor(private apiSvc: APIService) { }

  ngOnInit() {
    this.trackInfoList = this.apiSvc.getTrackInfo();
  }

}
