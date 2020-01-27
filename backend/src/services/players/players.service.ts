import { Injectable, HttpService } from '@nestjs/common';
import { BaseService } from '../base.service';
import { ConfigService } from '@nestjs/config';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class PlayersService extends BaseService {
  constructor(public configService: ConfigService, public http: HttpService) {
    super(configService, http);
  }

  getPlayer(tag: string) {
    if (tag.startsWith('#')) {
      tag = tag.replace('#', '%23');
    }

    const url = `${this.cocApi}/players/${tag}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map(response => response.data),
      catchError(err => of(err)),
    );
  }
}
