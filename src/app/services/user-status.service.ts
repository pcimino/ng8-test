import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStatusService {
  loggedInStatus:boolean = false;

  constructor() { }

  getUserStatus(): boolean {
    return this.loggedInStatus;
  }

  setUserStatus(newStat: boolean) {
    this.loggedInStatus = newStat;
  }
}


