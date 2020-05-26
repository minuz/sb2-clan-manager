import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/common';

export class BaseService {
  token: string;
  clanTag: string;
  cocApi: string;
  headers: any;

  constructor(public configService: ConfigService, public http: HttpService) {
    this.token = this.configService.get('token');
    this.clanTag = this.configService.get('clanTag');
    this.cocApi = this.configService.get('cocApi');
    this.headers = {
      Authorization: `Bearer ${this.token}`,
      Accept: 'application/json',
    };
  }
}
