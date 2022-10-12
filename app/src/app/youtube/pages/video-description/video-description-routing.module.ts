import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoDescriptionComponent } from './video-description.component';

const routes: Routes = [{ path: 'video/:id', component: VideoDescriptionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoDescriptionRoutingModule {}
