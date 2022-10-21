import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterConsumerComponent } from './register-consumer/register-consumer.component';
import { FormExtensionsModule } from './form-extensions/form-extensions.module';
import { GenerateFileComponent } from './register-consumer/generate-file/generate-file.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterConsumerComponent,
    GenerateFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormExtensionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
