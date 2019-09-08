
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';
import { DashboardPageComponent } from '../dashboard-page/dashboard-page.component';
import { PagenotfoundPageComponent } from '../pagenotfound-page/pagenotfound-page.component';

export const APP_ROUTES: Routes = [
  {
    path: 'dashboard',
    component: DashboardPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: '**', component: PagenotfoundPageComponent }
];