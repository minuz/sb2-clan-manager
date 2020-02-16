import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { switchMap, tap, filter } from 'rxjs/operators';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'sb2-player-dashboard',
  templateUrl: './player-dashboard.component.html',
  styleUrls: ['./player-dashboard.component.scss'],
})
export class PlayerDashboardComponent implements OnInit {
  @Input() tag: BehaviorSubject<string>;
  currentPlayer;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.tag
      .pipe(
        filter(tag => tag !== null),
        switchMap(tag => this.api.getPlayerDetails(tag)),
        tap(data => console.log(data)),
      )
      .subscribe(player => (this.currentPlayer = player));
  }
}
