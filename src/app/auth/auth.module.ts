import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormExtensionsModule } from './../form-extensions/form-extensions.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule,
    FormsModule, ReactiveFormsModule,
    FormExtensionsModule],
  exports: [LoginComponent, RegisterComponent],
})
export class AuthModule {}
