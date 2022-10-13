import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard.guard';
const a = '';

const routes: Routes = [
  { path: a, pathMatch: 'full', redirectTo: 'auth/login' },
  {
    path: 'youtube',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./authorization/authorization.module').then((m) => m.AuthorizationModule),
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
