import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, finalize, switchMap, tap } from 'rxjs/operators';
import { Member } from 'src/app/models/member.model';
import { CocApiService } from 'src/app/services/coc-api.service';

@Component({
  selector: 'sb2-members-table',
  templateUrl: './members-table.component.html',
  styleUrls: ['./members-table.component.scss'],
})
export class MembersTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'tag',
    'name',
    'role',
    'expLevel',
    'league',
    'trophies',
    'clanRank',
    'donationRatio',
    'donations',
    'donationsReceived',
  ];

  datasource: MatTableDataSource<Member>;
  isLoading = new BehaviorSubject<boolean>(true);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private readonly api: CocApiService) {
    this.datasource = new MatTableDataSource<Member>();
    this.datasource.sort = this.sort;
  }

  ngOnInit() {
    this.loadData(null).subscribe(data => (this.datasource.data = data));
  }

  ngAfterViewInit() {
    this.sort.sortChange
      .pipe(
        tap(_ => this.isLoading.next(true)),
        switchMap(sort => this.loadData(sort)),
      )
      .subscribe(data => (this.datasource.data = data));
  }

  loadData(sort) {
    return this.api.getMembers(sort).pipe(
      catchError(() => of([])),
      finalize(() => this.isLoading.next(false)),
    );
  }

  checkIsWarning(row: Member) {
    const ratio = row.donationRatio.split(':');
    const lhs = parseInt(ratio[0]);
    const rhs = parseInt(ratio[1]);

    return rhs > 2 || lhs === 0 ? 'warning' : '';
  }
}
