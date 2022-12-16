import { HomeComponent } from './pages/home/home.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/novaBank', pathMatch: 'full' },
  {path: 'auth', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
  // {
  //   path: '',
  //   component: LoginComponent,
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'register',
  //   component: RegisterComponent,
  // },
  // {
  //   path: 'home',
  //   component: HomeComponent,
  // },
  // {
  //   path: 'registerConsumer',
  //   component: RegisterConsumerComponent,
  // },
  // {
  //   path: 'generateFile',
  //   component: GenerateFileComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  PagesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
