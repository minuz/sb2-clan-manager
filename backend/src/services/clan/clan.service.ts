import { Injectable, HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { from, merge } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class ClanService {
  constructor(
    private readonly configService: ConfigService,
    private readonly http: HttpService,
  ) {}

  getClanMembers() {
    const token = this.configService.get('token');
    const clanTag = this.configService.get('clanTag');
    const cocApi = this.configService.get('cocApi');
    const url = `${cocApi}/clans/${clanTag}/members`;
    const playerUrl = `${cocApi}/players`;
    const headers = {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    };

    return this.http.get(url, { headers }).pipe(
      map(response => response.data),
      // map(players =>
      //   players.map(player =>
      //     this.http
      //       .get(`${playerUrl}/${player.tag.replace('#', '%23')}`, { headers })
      //       .toPromise()
      //       .then((response: any) => {
      //         const data = response.data;
      //         const result = Object.assign(player, data);
      //         return result;
      //       }),
      //   ),
      // ),
      // tap(data => {
      //   console.log(data);
      // }),
    );
  }
}
