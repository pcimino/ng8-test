import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { APP_ROUTES } from './app-routes.const';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
