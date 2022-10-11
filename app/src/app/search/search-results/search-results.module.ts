import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultsRoutingModule } from './search-results-routing.module';
import { SearchResultsComponent } from './search-results.component';
import { SearchCardModule } from '../cards/search-card/search-card.module';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
// import { DateStatusDirective } from 'src/app/directive/date-status.directive';
// import { SearchCardComponent } from '../cards/search-card/search-card.component';

@NgModule({
  declarations: [SearchResultsComponent],
  imports: [CommonModule, SearchResultsRoutingModule, SearchCardModule],
  providers: [FilterPipe],
})
export class SearchResultsModule {}
