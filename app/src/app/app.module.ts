import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardCreatorComponent } from './card-creator/card-creator/card-creator.component';
import { HeaderComponent } from './header/header/header.component';
import { SettingsComponent } from './header/settings/settings.component';
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
import { CardStatisticModule } from './search/cards/card-statistic/card-statistic.module';
import { DescriptionCardModule } from './search/cards/description-card/description-card.module';
import { LoginModule } from './authorization/login/login/login.module';
import { FormInputModule } from './shared/components/form-input/form-input.module';
import { RegistrationModule } from './authorization/registration/registration/registration.module';
import { FormModule } from './shared/components/form/form.module';

@NgModule({
  declarations: [
    AppComponent,
    CardCreatorComponent,
    HeaderComponent,
    SettingsComponent,
    LoginInfoComponent,
    SearchInputComponent,
    HeaderBtnComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    CardStatisticModule,
    DescriptionCardModule,
    SearchCardModule,
    SearchResultsModule,
    ErrorModule,
    LoginModule,
    RegistrationModule,
    FormModule,
    FormInputModule,
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
