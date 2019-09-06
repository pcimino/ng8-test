import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserStatusService } from './services/user-status.service';
import { APIService } from './services/api.service';
import { LeftListComponent } from './left-list/left-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { PagenotfoundPageComponent } from './pagenotfound-page/pagenotfound-page.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
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


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    AppComponent,
    PageHeaderComponent,
    LeftListComponent,
    LoginPageComponent,
    DashboardPageComponent,
    PagenotfoundPageComponent
  ],
  providers: [UserStatusService, APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
