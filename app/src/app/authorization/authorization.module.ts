import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './pages/login/login/login.module';
import { RegistrationModule } from './pages/registration/registration/registration.module';
import { AuthorizationRoutingModule } from './authorization-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthorizationRoutingModule, LoginModule, RegistrationModule],
})
export class AuthorizationModule {}
