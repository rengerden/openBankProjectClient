import { AuthModule } from './../auth/auth.module';

import { FormExtensionsModule } from './../form-extensions/form-extensions.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './../app-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterConsumerComponent } from './register-consumer/register-consumer.component';

@NgModule({
  declarations: [PagesComponent, HomeComponent, RegisterConsumerComponent],
  imports: [CommonModule, SharedModule, AppRoutingModule, FormsModule,
    ReactiveFormsModule,
    FormExtensionsModule,AuthModule],
  exports: [PagesComponent, HomeComponent, RegisterConsumerComponent],
})
export class PagesModule {}
