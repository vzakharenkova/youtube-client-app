import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./search/search-results/search-results.module').then((m) => m.SearchResultsModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./authorization/login/login/login.module').then((m) => m.LoginModule),
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
