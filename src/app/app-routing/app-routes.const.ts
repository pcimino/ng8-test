
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';
import { DashboardPageComponent } from '../dashboard-page/dashboard-page.component';
import { PagenotfoundPageComponent } from '../pagenotfound-page/pagenotfound-page.component';
import { AuthGuard } from '../guards/auth-guard.service';

export const APP_ROUTES: Routes = [
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PagenotfoundPageComponent,
    canActivate: [AuthGuard]
  }

];