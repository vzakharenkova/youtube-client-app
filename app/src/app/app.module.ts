import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authorization/login/login/login.component';
import { RegistrationComponent } from './authorization/registration/registration/registration.component';
import { CardCreatorComponent } from './card-creator/card-creator/card-creator.component';
import { ErrorComponent } from './error/error/error.component';
import { HeaderComponent } from './header/header/header.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SettingsComponent } from './header/settings/settings.component';
import { SearchCardComponent } from './search/cards/search-card/search-card.component';
import { DescriptionCardComponent } from './search/cards/description-card/description-card.component';
import { LoginInfoComponent } from './header/login-info/login-info.component';
import { SearchInputComponent } from './header/search-input/search-input.component';
import { MatIconModule } from '@angular/material/icon';
import { HeaderBtnComponent } from './header/header-btn/header-btn.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    CardCreatorComponent,
    ErrorComponent,
    HeaderComponent,
    SearchResultsComponent,
    SettingsComponent,
    SearchCardComponent,
    DescriptionCardComponent,
    LoginInfoComponent,
    SearchInputComponent,
    HeaderBtnComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
