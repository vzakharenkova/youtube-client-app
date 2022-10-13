import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { MainModule } from './pages/main/main.module';
import { DescriptionCardModule } from './components/description-card/description-card.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, YoutubeRoutingModule, MainModule, DescriptionCardModule],
})
export class YoutubeModule {}
