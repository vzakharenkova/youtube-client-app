import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormComponent } from './form.component';
import { FormInputModule } from '../form-input/form-input.module';

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, FormInputModule],
  exports: [FormComponent],
})
export class FormModule {}
