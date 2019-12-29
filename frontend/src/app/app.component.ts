import { Component, OnInit } from '@angular/core';
import { CocApiService } from './services/coc-api.service';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'sb2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Sydney Bros 2 Clan';
  members: any;

  constructor(private clashApi: CocApiService) {}

  ngOnInit() {
    this.members = this.clashApi.getMembers().pipe(
      map((result: any) => result.items),
      tap(data => console.log(data)),
    );
  }
}
