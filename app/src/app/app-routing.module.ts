import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./youtube/components/search-results/search-results.module').then(
        (m) => m.SearchResultsModule,
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./authorization/pages/login/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./authorization/pages/registration/registration/registration.module').then(
        (m) => m.RegistrationModule,
      ),
  },
  {
    path: 'form-input',
    loadChildren: () =>
      import('./shared/components/form-input/form-input.module').then((m) => m.FormInputModule),
  },
  {
    path: 'form',
    loadChildren: () => import('./shared/components/form/form.module').then((m) => m.FormModule),
  },
  {
    path: '**',
    loadChildren: () => import('./error/error/error.module').then((m) => m.ErrorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
