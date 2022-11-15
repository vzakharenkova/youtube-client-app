import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './search-results.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SearchCardModule } from '../search-card/search-card.module';
import { PipesModule } from '../../pipes/pipes.module';
import { FilterPipe } from '../../pipes/filter.pipe';

@NgModule({
  declarations: [SearchResultsComponent],
  imports: [CommonModule, SearchCardModule, PipesModule, MatProgressSpinnerModule],
  providers: [FilterPipe],
  exports: [SearchResultsComponent],
})
export class SearchResultsModule {}
