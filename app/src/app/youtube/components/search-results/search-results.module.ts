import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsRoutingModule } from './search-results-routing.module';
import { SearchResultsComponent } from './search-results.component';
import { FilterPipe } from '../../pipes/filter.pipe';
import { SearchCardModule } from '../search-card/search-card.module';

@NgModule({
  declarations: [SearchResultsComponent],
  imports: [CommonModule, SearchResultsRoutingModule, SearchCardModule],
  providers: [FilterPipe],
})
export class SearchResultsModule {}
