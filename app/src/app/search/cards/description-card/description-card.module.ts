import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionCardComponent } from './description-card.component';
import { DescriptionСardRoutingModule } from './description-card-routing.module';
import { CardStatisticModule } from '../card-statistic/card-statistic.module';

@NgModule({
  declarations: [DescriptionCardComponent],
  imports: [CommonModule, DescriptionСardRoutingModule, CardStatisticModule],
  exports: [DescriptionCardComponent],
})
export class DescriptionCardModule {}
