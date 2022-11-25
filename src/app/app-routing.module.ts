import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterConsumerComponent } from './register-consumer/register-consumer.component';
import { GenerateFileComponent } from './register-consumer/generate-file/generate-file.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {
    path: '', 
    component: LoginComponent, 
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'registerConsumer',
    component: RegisterConsumerComponent,
  },
  {
    path: 'generateFile',
    component: GenerateFileComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
