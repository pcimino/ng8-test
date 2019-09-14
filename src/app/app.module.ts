import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { APP_ROUTES } from './app-routing/app-routes.const';
import { HttpClientModule } from '@angular/common/http';
import { LeftListComponent } from './left-list/left-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { PageHeaderAuthComponent } from './page-header-auth/page-header-auth.component';
import { PageHeaderUnauthComponent } from './page-header-unauth/page-header-unauth.component';

import { AuthService } from './services/auth.service';
import { APIService } from './services/api.service';

import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { PagenotfoundPageComponent } from './pagenotfound-page/pagenotfound-page.component';

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
      APP_ROUTES,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    AppComponent,
    PageHeaderAuthComponent,
    PageHeaderUnauthComponent,
    LeftListComponent,
    LoginPageComponent,
    DashboardPageComponent,
    PagenotfoundPageComponent
  ],
  providers: [AuthService, APIService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
