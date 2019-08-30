import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from '../classes/user-info';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private loggedInStatus:boolean = false;
  private userInfo: UserInfo;
  private http: HttpClient;
  private baseURL = 'http://localhost:3004/'

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getUserInfo(): UserInfo {

    this.http.get(this.baseURL+'user-data').subscribe((res)=>{
        this.userInfo = res[0];
            console.log(this.userInfo);
        });
    return this.userInfo;
  }


}
