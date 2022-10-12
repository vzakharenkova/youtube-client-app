import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoDescriptionComponent } from './video-description.component';
import { DescriptionCardModule } from '../../components/description-card/description-card.module';

@NgModule({
  declarations: [VideoDescriptionComponent],
  imports: [CommonModule, DescriptionCardModule],
})
export class VideoDescriptionModule {}
