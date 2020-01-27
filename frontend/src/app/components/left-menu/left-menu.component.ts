import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sb2-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

  constructor() { }

  ngOnInit() {
  }

}
