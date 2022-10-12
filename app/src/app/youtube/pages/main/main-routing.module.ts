import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoDescriptionComponent } from '../video-description/video-description.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'video/:id', component: VideoDescriptionComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
