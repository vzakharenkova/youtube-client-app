import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationModule } from './authorization/authorization.module';

import { CardCreatorComponent } from './card-creator/card-creator/card-creator.component';
import { LoginInfoComponent } from './core/components/header/components/login-info/login-info.component';
import { SearchInputComponent } from './core/components/header/components/search-input/search-input.component';
import { SettingsComponent } from './core/components/header/components/settings/settings.component';
import { HeaderComponent } from './core/components/header/header/header.component';
import { ErrorModule } from './error/error/error.module';

import { FilterPipe } from './youtube/pipes/filter.pipe';
import { YoutubeModule } from './youtube/youtube.module';
import { ButtonModule } from './shared/components/button/button.module';

@NgModule({
  declarations: [
    AppComponent,
    CardCreatorComponent,
    HeaderComponent,
    SettingsComponent,
    LoginInfoComponent,
    SearchInputComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    YoutubeModule,
    AuthorizationModule,
    ErrorModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    ButtonModule,
    FormsModule,
  ],
  exports: [],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
