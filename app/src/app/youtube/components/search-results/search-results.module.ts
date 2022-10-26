import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './search-results.component';
import { FilterPipe } from '../../pipes/filter.pipe';
import { SearchCardModule } from '../search-card/search-card.module';

@NgModule({
  declarations: [SearchResultsComponent],
  imports: [CommonModule, SearchCardModule],
  providers: [FilterPipe],
  exports: [SearchResultsComponent],
})
export class SearchResultsModule {}
