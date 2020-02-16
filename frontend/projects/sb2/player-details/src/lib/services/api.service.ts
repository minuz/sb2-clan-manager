import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPlayerList() {
    return this.http.get('api/clan');
  }

  getPlayerDetails(tag) {
    return this.http.get(`api/players/${tag}`);
  }
}
