import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AdvancedPieChartComponent } from './components/advanced-pie-chart/advanced-pie-chart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [DashboardComponent, AdvancedPieChartComponent],
  imports: [DashboardRoutingModule, NgxChartsModule, BrowserAnimationsModule],
  exports: [],
  providers: [ApiService],
})
export class DashboardModule {}
