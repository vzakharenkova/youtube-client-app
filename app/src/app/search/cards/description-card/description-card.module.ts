import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionCardComponent } from './description-card.component';
import { DescriptionСardRoutingModule } from './description-card-routing.module';

@NgModule({
  declarations: [DescriptionCardComponent],
  imports: [CommonModule, DescriptionСardRoutingModule],
  exports: [],
})
export class DescriptionCardModule {}
