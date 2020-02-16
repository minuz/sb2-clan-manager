import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/members' },
  {
    path: 'members',
    loadChildren: () => import('members').then(mod => mod.MembersModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('dashboard').then(mod => mod.DashboardModule),
  },
  {
    path: 'player-details',
    loadChildren: () =>
      import('@sb2/player-details').then(mod => mod.PlayerDetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
