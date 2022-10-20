import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardCreatorComponent } from './card-creator/card-creator/card-creator.component';
import { AuthGuard } from './core/guards/auth-guard.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/youtube' },
  {
    path: 'youtube',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./authorization/authorization.module').then((m) => m.AuthorizationModule),
  },
  {
    path: 'admin',
    component: CardCreatorComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    loadChildren: () => import('./error/error/error.module').then((m) => m.ErrorModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
