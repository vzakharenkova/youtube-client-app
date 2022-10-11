import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DateStatusDirective } from './date-status.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [DateStatusDirective],
  exports: [DateStatusDirective],
})
export class DirectivesModule {}
