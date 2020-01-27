import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { sortBy } from 'lodash';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { BaseService } from '../base.service';

@Injectable()
export class ClanService extends BaseService {
  constructor(public configService: ConfigService, public http: HttpService) {
    super(configService, http);
  }

  getClanMembers(active: string, direction: string) {
    const url = `${this.cocApi}/clans/${this.clanTag}/members`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map(response => response.data.items),
      map(data => this.renameRoles(data)),
      map(data => this.calculateDonationRatio(data)),
      map((data: any[]) => this.sort(data, active, direction)),
      catchError(e => of(e)),
    );
  }

  private renameRoles(data: any[]) {
    return data.map(item => {
      switch (item.role) {
        case 'admin':
          item.role = 'Elder';
          break;
        case 'coLeader':
          item.role = 'Co-leader';
          break;
        case 'member':
          item.role = 'Member';
          break;
        case 'leader':
          item.role = 'Leader';
          break;
      }
      return item;
    });
  }

  private calculateDonationRatio(data: any[]): any[] {
    return data.map(item => {
      const donations = item.donations;
      const donationsReceived = item.donationsReceived;

      const lhs = !donations ? 0 : this.calc(donations / donationsReceived);
      const rhs = !donationsReceived
        ? 0
        : this.calc(donationsReceived / donations);

      const donationRatio = `${lhs}:${rhs}`;
      return { ...item, donationRatio };
    });
  }

  private calc(calcExp) {
    let value = Math.round(Math.abs(calcExp));
    if (value === 0 || !value) {
      value = 1;
    }

    // Handle edge cases
    if (value === Infinity) {
      value = 0;
    }

    return value;
  }

  private sort(data, active, direction) {
    if (active && direction) {
      data = sortBy(data, active);
      return direction.toUpperCase() === 'DESC' ? data.reverse() : data;
    }

    return data;
  }
}
