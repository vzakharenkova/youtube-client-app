import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { MainModule } from './pages/main/main.module';
import { VideoDescriptionModule } from './pages/video-description/video-description.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, YoutubeRoutingModule, MainModule, VideoDescriptionModule],
})
export class YoutubeModule {}
