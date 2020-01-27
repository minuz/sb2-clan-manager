import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersTableComponent } from './components/members-table/members-table.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'members', component: MembersTableComponent },
  {
    path: 'dashboard',
    loadChildren: () => import('dashboard').then(mod => mod.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
