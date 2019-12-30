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

  getMembers(): Observable<Member[]> {
    return this.http.get('api/clan').pipe(map((result: any) => result.items));
  }
}
