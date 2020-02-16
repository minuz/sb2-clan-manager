import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sb2-advanced-pie-chart',
  templateUrl: './advanced-pie-chart.component.html',
  styleUrls: ['./advanced-pie-chart.component.scss']
})
export class AdvancedPieChartComponent implements OnInit {
  @Input() data: any[];
  @Input()
  view: any[] = [700, 400];

  // options
  gradient = true;
  showLegend = true;
  showLabels = true;
  isDoughnut = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() { }

  ngOnInit() {
  }

}
