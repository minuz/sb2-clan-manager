import { Component, OnInit } from '@angular/core';

import { ApiService } from './services/api.service';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'sb2-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss'],
})
export class PlayerDetailsComponent implements OnInit {
  players;
  isLoading: BehaviorSubject<boolean>;
  currentPlayer = new BehaviorSubject<string>(null);

  constructor(private apiService: ApiService) {
    this.isLoading = new BehaviorSubject(true);
    this.players = this.apiService
      .getPlayerList()
      .pipe(tap(_ => this.isLoading.next(false)));
  }

  ngOnInit() {}

  setCurrentPlayer(tag) {
    this.currentPlayer.next(tag);
  }
}
