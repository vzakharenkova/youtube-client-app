import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionCardComponent } from '../description-card/description-card.component';
import { SearchResultsComponent } from './search-results.component';

const routes: Routes = [
  { path: '', component: SearchResultsComponent },
  { path: 'video/:id', component: DescriptionCardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchResultsRoutingModule {}
