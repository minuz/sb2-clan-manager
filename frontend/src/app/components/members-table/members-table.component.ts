import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Member } from 'src/app/models/member.model';
import { CocApiService } from 'src/app/services/coc-api.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'sb2-members-table',
  templateUrl: './members-table.component.html',
  styleUrls: ['./members-table.component.scss'],
})
export class MembersTableComponent implements OnInit {
  isLoadingResults = true;
  dataSource = new MatTableDataSource<Member>();
  displayedColumns: string[] = [
    'name',
    'role',
    'expLevel',
    'league',
    'trophies',
    'clanRank',
    'donations',
    'donationsReceived',
  ];

  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private readonly api: CocApiService) {}

  ngOnInit() {
    this.api
      .getMembers()
      .pipe(tap(_ => (this.isLoadingResults = true)))
      .subscribe(data => {
        this.isLoadingResults = false;
        this.dataSource.data = data;
        this.dataSource.sort = this.sort;
      });
  }
}
