import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MembersTableComponent } from './members-table/members-table.component';

const routes: Routes = [
  { path: '', component: MembersTableComponent },
  { path: '*', component: MembersTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembersRoutingModule {}
