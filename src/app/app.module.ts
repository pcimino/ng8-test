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

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  declarations: [
    AppComponent,
    PageHeaderComponent,
    LeftListComponent
  ],
  providers: [UserStatusService, APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
