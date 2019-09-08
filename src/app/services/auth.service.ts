import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

const TOKEN = 'TOKEN';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private toastr: ToastrService) { }

  isAuthenticated() {
  this.toastr.warning('isAuthenticated', '1');
  this.toastr.warning("localStorage.getItem('token')", localStorage.getItem('token'))
    return localStorage.getItem('token') !== null;
  }

  login() {
    localStorage.setItem('token', TOKEN);
  }
  logout() {
    localStorage.removeItem('token');
  }
}
