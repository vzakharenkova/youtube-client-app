import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { VideoDescriptionComponent } from './pages/video-description/video-description.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'video/:id', component: VideoDescriptionComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
