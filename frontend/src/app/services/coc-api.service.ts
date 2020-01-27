import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Member } from '../models/member.model';

@Injectable({
  providedIn: 'root',
})
export class CocApiService {
  constructor(private http: HttpClient) {}

  getMembers(sort): Observable<Member[]> {
    let url = 'api/clan';

    if (sort) {
      url = `${url}?active=${sort.active}&direction=${sort.direction}`;
    }

    return this.http.get(url).pipe(map((result: any) => {
      console.log(result);
      return result;
    }));
  }
}
