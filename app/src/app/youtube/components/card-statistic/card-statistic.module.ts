import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CardStatisticComponent } from './card-statistic.component';

@NgModule({
  declarations: [CardStatisticComponent],
  imports: [CommonModule, MatIconModule],
  exports: [CardStatisticComponent],
})
export class CardStatisticModule {}
