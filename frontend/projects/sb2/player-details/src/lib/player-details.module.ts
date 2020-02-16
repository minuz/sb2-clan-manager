import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';

import { PlayerDetailsComponent } from './player-details.component';
import { PlayerDetailsRoutingModule } from './players-details.routing.module';
import { ApiService } from './services/api.service';
import { PlayerDashboardComponent } from './components/player-dashboard/player-dashboard.component';

@NgModule({
  declarations: [PlayerDetailsComponent, PlayerDashboardComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    PlayerDetailsRoutingModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
  ],
  exports: [PlayerDetailsComponent],
  providers: [ApiService],
})
export class PlayerDetailsModule {}
