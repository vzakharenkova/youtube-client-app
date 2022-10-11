import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionCardComponent } from './description-card.component';

const routes: Routes = [{ path: 'video/:id', component: DescriptionCardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescriptionСardRoutingModule {}
