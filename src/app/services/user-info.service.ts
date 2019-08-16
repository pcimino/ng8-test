import { Injectable } from '@angular/core';


const USER_INFO_MOCK = {
    firstName: 'Rodger',
    lastName: 'Dodger',
    email: 'artful_dodger@gmail.com',
    userId: 'dod19'
}

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor() { }

  getUserInfo() {
    return USER_INFO_MOCK;
  }
}

