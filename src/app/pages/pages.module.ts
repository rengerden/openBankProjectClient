import { AppRoutingModule } from './../app-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule, SharedModule, AppRoutingModule
  ],
  exports: [PagesComponent]
})
export class PagesModule { }
