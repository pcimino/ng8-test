import { Injectable } from '@angular/core';

const TOKEN = 'TOKEN';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated():boolean {
    return localStorage.getItem('token') !== null;
  }

  login() {
    localStorage.setItem('token', TOKEN);
  }
  logout() {
    localStorage.removeItem('token');
  }
}
