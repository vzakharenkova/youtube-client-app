import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionCardComponent } from './description-card.component';
import { CardStatisticModule } from '../card-statistic/card-statistic.module';
import { DirectivesModule } from '../../directive/directives.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';

@NgModule({
  declarations: [DescriptionCardComponent],
  imports: [CommonModule, CardStatisticModule, DirectivesModule, ButtonModule],
  exports: [DescriptionCardComponent],
})
export class DescriptionCardModule {}
