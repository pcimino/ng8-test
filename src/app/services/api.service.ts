import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from '../classes/user-info';
import { TrackInfo } from '../classes/track-info';
import { ToastrService } from 'ngx-toastr';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private loggedInStatus:boolean = false;
  private http: HttpClient;
  private baseURL = 'http://localhost:3004/'

  private userInfo: UserInfo;
  private trackInfo: any;
  private raceInfo: any;

  constructor(private httpArg: HttpClient,
      private toastr: ToastrService) {
    this.http = httpArg;
  }

  getUserInfo(): Observable<Object> {
    return this.http.get(this.baseURL+'user-data');
  }


  getTrackInfo(): Observable<Object> {
    return this.http.get(this.baseURL+'tracks');
  }

  getRaceInfo(track: string, date: string) {
    this.http.get(this.baseURL+'race-dates/'+date);
  }

  getRaceInfo2(track: string, date: any) {
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
