import { Injectable, HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ClanService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  getClanMembers() {
    const token = this.configService.get('token');
    const clanTag = this.configService.get('clanTag');
    const cocApi = this.configService.get('cocApi');
    const url = `${cocApi}/clans/${clanTag}/members`;
    const headers = {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    };

    return this.httpService
      .get(url, { headers })
      .pipe(map(response => response.data));
  }
}
