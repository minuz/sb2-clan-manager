import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

const config = {
  token:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjQ3ZjA3MzU2LWRiYzctNDRiMy04NTk3LTcyMGRjZDRiOGJiMCIsImlhdCI6MTU3NzU5MDk1Miwic3ViIjoiZGV2ZWxvcGVyL2ZkYTZiMTIxLTM5ZTktZTQ4Ni1mNTY2LTA0NTkyNTBiNzY1YSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjExNS42NC41Mi45NiJdLCJ0eXBlIjoiY2xpZW50In1dfQ.yQUFn8Ava0BzjLIwcCDoxIGFHNMTov0ZibWdFonmv2f7VAHqftRKOQhWj1JeyuoLEvkzelnkxmj9-Wedl6gTYg',
  clanTag: '%23pcr8vg00',
};

@Injectable({
  providedIn: 'root',
})
export class CocApiService {
  constructor(private http: HttpClient) {}

  getMembers() {
    return this.http.get('api/clan');
    // const token = config.token;
    // const clanTag = config.clanTag;
    // const url = `api/clans/${clanTag}/members`;
    // const headers = {
    //   Authorization: `Bearer ${token}`,
    //   Accept: 'application/json',
    // };

    // return this.http.get(url, { headers });


    // // return this.http.get('assets/config').pipe(
    // //   switchMap((config: any) => {


    // //     // return this.http.get('api/clan');
    // //   }),
    // // );
  }
}
