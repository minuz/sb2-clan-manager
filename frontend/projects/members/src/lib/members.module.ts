import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { MembersTableComponent } from './members-table/members-table.component';
import { MembersRoutingModule } from './members.routing.module';
import { MembersApiService } from './services/members.service';

@NgModule({
  declarations: [MembersTableComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MembersRoutingModule
  ],
  exports: [MembersTableComponent],
  providers: [MembersApiService]
})
export class MembersModule {}
