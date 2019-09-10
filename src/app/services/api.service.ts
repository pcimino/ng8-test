import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from '../classes/user-info';
import { TrackInfo } from '../classes/track-info';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private loggedInStatus:boolean = false;
  private http: HttpClient;
  private baseURL = 'http://localhost:3004/'

  private userInfo: UserInfo;
  private trackInfo: TrackInfo;
  private raceInfo: any;

  constructor(private httpArg: HttpClient,
      private toastr: ToastrService) {
    this.http = httpArg;
  }

  getUserInfo(): UserInfo {
    this.http.get(this.baseURL+'user-data').subscribe((res)=>{
        this.userInfo = res[0];
        console.log(this.userInfo);
    },
    res => {
          this.toastr.error('Error', res.error.error);
    });
    return this.userInfo;
  }

  getTrackInfo(): TrackInfo {
    this.http.get(this.baseURL+'tracks').subscribe((res)=>{
        this.trackInfo = res;
        console.log(this.trackInfo);
    },
    res => {
          this.toastr.error('Error', res.error.error);
    });
    return this.trackInfo;
  }

  getRaceInfo(track: string, date: any) {
    this.http.get(this.baseURL+'race-dates?date='+date).subscribe((res)=>{
         let tempData = res[0];
         this.raceInfo = tempData[track];
         console.log(this.raceInfo);
    },
    res => {
          this.toastr.error('Error', res.error.error);
    });
    return this.raceInfo;
  }
}
