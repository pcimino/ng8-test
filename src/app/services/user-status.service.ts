import { Injectable } from '@angular/core';

const TOKEN = 'TOKEN';

@Injectable({
  providedIn: 'root'
})

export class UserStatusService {
  loggedInStatus:boolean = false;

  constructor() { }

  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }

  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }

  getUserStatus(): boolean {
    return this.loggedInStatus;
  }

  setUserStatus(newStat: boolean) {
    this.loggedInStatus = newStat;
  }
}


