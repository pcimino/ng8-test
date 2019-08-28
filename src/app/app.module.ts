import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserStatusService } from './services/user-status.service';
import { UserInfoService } from './services/user-info.service';
import { LeftListComponent } from './left-list/left-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  declarations: [
    AppComponent,
    PageHeaderComponent,
    LeftListComponent
  ],
  providers: [UserStatusService, UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
