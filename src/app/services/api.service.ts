import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from '../classes/user-info';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private loggedInStatus:boolean = false;
  private http: HttpClient;
  private baseURL = 'http://localhost:3004/'

  private userInfo: UserInfo;
  private raceInfo: any;

  constructor(private httpArg: HttpClient) {
    this.http = httpArg;
  }

  getUserInfo(): UserInfo {
    this.http.get(this.baseURL+'user-data').subscribe((res)=>{
        this.userInfo = res[0];
        console.log(this.userInfo);
    });
    return this.userInfo;
  }

  getRaceInfo(track: string, date: any) {
    this.http.get(this.baseURL+'race-dates?date='+date).subscribe((res)=>{
         let tempData = res[0];
         this.raceInfo = tempData[track];
         console.log(this.raceInfo);
    });
    return this.raceInfo;
  }
}
