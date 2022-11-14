import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterConsumerComponent } from './register-consumer/register-consumer.component';
import { GenerateFileComponent } from './register-consumer/generate-file/generate-file.component';

const routes: Routes = [
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
