import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListConsentComponent } from './list-consent/list-consent.component';

const routes: Routes = [
  { path: 'list-consent', component: ListConsentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
