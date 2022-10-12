import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CardStatisticComponent } from './card-statistic.component';

@NgModule({
  declarations: [CardStatisticComponent],
  imports: [CommonModule, MatIconModule, RouterModule],
  exports: [CardStatisticComponent],
})
export class CardStatisticModule {}
