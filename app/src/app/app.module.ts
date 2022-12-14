import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationModule } from './authorization/authorization.module';

import { CardCreatorComponent } from './card-creator/card-creator/card-creator.component';
import { LoginInfoComponent } from './core/components/header/components/login-info/login-info.component';
import { SearchInputComponent } from './core/components/header/components/search-input/search-input.component';
import { SettingsComponent } from './core/components/header/components/settings/settings.component';
import { HeaderComponent } from './core/components/header/header/header.component';
import { ErrorModule } from './error/error/error.module';

import { YoutubeModule } from './youtube/youtube.module';
import { ButtonModule } from './shared/components/button/button.module';
import { SearchInterceptorService } from './youtube/services/search-Interceptor-service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducer } from './redux/reducers/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CardCreatorComponent,
    HeaderComponent,
    SettingsComponent,
    LoginInfoComponent,
    SearchInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    YoutubeModule,
    AuthorizationModule,
    ErrorModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    ButtonModule,
    FormsModule,

    StoreModule.forRoot({ videoList: reducer }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  exports: [],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SearchInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
