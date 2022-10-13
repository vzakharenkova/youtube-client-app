import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard.guard';

const routes: Routes = [
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
  { path: '', pathMatch: 'full', redirectTo: 'youtube' },
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
