import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { SearchResultsModule } from '../../components/search-results/search-results.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, SearchResultsModule],
})
export class MainModule {}
