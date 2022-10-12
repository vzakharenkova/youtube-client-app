import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './authorization/pages/login/login/login.module';
import { RegistrationModule } from './authorization/pages/registration/registration/registration.module';
import { CardCreatorComponent } from './card-creator/card-creator/card-creator.component';
import { HeaderBtnComponent } from './core/components/header/components/header-btn/header-btn.component';
import { LoginInfoComponent } from './core/components/header/components/login-info/login-info.component';
import { SearchInputComponent } from './core/components/header/components/search-input/search-input.component';
import { SettingsComponent } from './core/components/header/components/settings/settings.component';
import { HeaderComponent } from './core/components/header/header/header.component';
import { ErrorModule } from './error/error/error.module';
import { FormInputModule } from './shared/components/form-input/form-input.module';
import { FormModule } from './shared/components/form/form.module';
import { CardStatisticModule } from './youtube/components/card-statistic/card-statistic.module';
import { DescriptionCardModule } from './youtube/components/description-card/description-card.module';
import { SearchCardModule } from './youtube/components/search-card/search-card.module';
import { SearchResultsModule } from './youtube/components/search-results/search-results.module';
import { FilterPipe } from './youtube/pipes/filter.pipe';

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
