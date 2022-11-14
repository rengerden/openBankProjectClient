import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorMsgComponent } from './form-error-msg/form-error-msg.component';
import { FormErrorContainerComponent } from './form-error-container/form-error-container.component';

@NgModule({
  declarations: [
    FormErrorMsgComponent,
    FormErrorContainerComponent,
  ],
  imports: [CommonModule],
  exports: [
    FormErrorMsgComponent,
    FormErrorContainerComponent,
  ],
})
export class FormExtensionsModule {}