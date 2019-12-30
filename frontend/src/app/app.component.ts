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

  constructor() {}

  ngOnInit() {}
}
