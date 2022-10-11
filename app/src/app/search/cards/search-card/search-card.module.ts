import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCardComponent } from './search-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DirectivesModule } from 'src/app/directive/directives.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SearchCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    DirectivesModule,
    RouterModule,
  ],
  exports: [SearchCardComponent],
})
export class SearchCardModule {}
