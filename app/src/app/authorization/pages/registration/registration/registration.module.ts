import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationComponent } from './registration.component';
import { FormModule } from 'src/app/shared/components/form/form.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [CommonModule, RouterModule, FormModule],
})
export class RegistrationModule {}
