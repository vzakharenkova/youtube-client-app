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
import { HeaderBtnComponent } from './core/header/header-btn/header-btn.component';
import { HeaderComponent } from './core/header/header/header.component';
import { LoginInfoComponent } from './core/header/login-info/login-info.component';
import { SearchInputComponent } from './core/header/search-input/search-input.component';
import { SettingsComponent } from './core/header/settings/settings.component';
import { ErrorModule } from './error/error/error.module';
import { FormInputModule } from './shared/components/form-input/form-input.module';
import { FormModule } from './shared/components/form/form.module';
import { CardStatisticModule } from './youtube/components/card-statistic/card-statistic.module';
import { DescriptionCardModule } from './youtube/components/description-card/description-card.module';
import { SearchCardModule } from './youtube/components/search-card/search-card.module';
import { SearchResultsModule } from './youtube/components/search-results/search-results.module';
import { FilterPipe } from './youtube/pipes/filter.pipe';
// import { HeaderComponent } from './header/header/header.component';
// import { SettingsComponent } from './header/settings/settings.component';
// import { LoginInfoComponent } from './header/login-info/login-info.component';
// import { SearchInputComponent } from './header/search-input/search-input.component';
// import { MatIconModule } from '@angular/material/icon';
// import { HeaderBtnComponent } from './header/header-btn/header-btn.component';
// import { MatButtonModule } from '@angular/material/button';
// import { FormsModule } from '@angular/forms';
// import { FilterPipe } from './pipes/filter.pipe';
// import { ErrorModule } from './error/error/error.module';
// import { SearchResultsModule } from './search/search-results/search-results.module';
// import { SearchCardModule } from './search/cards/search-card/search-card.module';
// import { MatCardModule } from '@angular/material/card';
// import { CardStatisticModule } from './search/cards/card-statistic/card-statistic.module';
// import { DescriptionCardModule } from './search/cards/description-card/description-card.module';
// import { LoginModule } from './authorization/login/login/login.module';
// import { FormInputModule } from './shared/components/form-input/form-input.module';
// import { RegistrationModule } from './authorization/registration/registration/registration.module';
// import { FormModule } from './shared/components/form/form.module';

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
