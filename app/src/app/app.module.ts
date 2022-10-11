import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authorization/login/login/login.component';
import { RegistrationComponent } from './authorization/registration/registration/registration.component';
import { CardCreatorComponent } from './card-creator/card-creator/card-creator.component';
// import { ErrorComponent } from './error/error/error.component';
import { HeaderComponent } from './header/header/header.component';
// import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SettingsComponent } from './header/settings/settings.component';
// import { SearchCardComponent } from './search/cards/search-card/search-card.component';
// import { DescriptionCardComponent } from './search/cards/description-card/description-card.component';
import { LoginInfoComponent } from './header/login-info/login-info.component';
import { SearchInputComponent } from './header/search-input/search-input.component';
import { MatIconModule } from '@angular/material/icon';
import { HeaderBtnComponent } from './header/header-btn/header-btn.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { ErrorModule } from './error/error/error.module';
import { SearchResultsModule } from './search/search-results/search-results.module';
import { SearchCardModule } from './search/cards/search-card/search-card.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    CardCreatorComponent,
    HeaderComponent,
    SettingsComponent,
    // DescriptionCardComponent,
    LoginInfoComponent,
    SearchInputComponent,
    HeaderBtnComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    SearchCardModule,
    SearchResultsModule,
    ErrorModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
  ],
  exports: [],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
