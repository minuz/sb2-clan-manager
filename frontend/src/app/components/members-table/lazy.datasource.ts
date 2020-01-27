import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

export class LazyDataSource<T> extends MatTableDataSource<T> {
  isLoading = new BehaviorSubject<boolean>(true);
  dataStream = new BehaviorSubject<T[]>([]);

  constructor(private dataLoader: Observable<T[]> | BehaviorSubject<T[]>) {
    super();
  }

  /**
   * Used by the MatTable. Called when it connects to the data source.
   * @docs-private
   */
  connect(): BehaviorSubject<T[]> {
    return this.dataStream;
  }

  /**
   * Used by the MatTable. Called when it is destroyed. No-op.
   * @docs-private
   */
  disconnect(): void {
    this.isLoading.complete();
    this.dataStream.complete();
  }

  loadData(sort?: Sort) {
    if (sort) {
      this.applySort(sort);
    } else {
      this.dataLoader
        .pipe(
          catchError(() => of([])),
          finalize(() => this.isLoading.next(false)),
        )
        .subscribe(data => this.dataStream.next(data));
    }
  }

  applySort(sort: Sort) {
    console.log(this.sort);
  }
}
