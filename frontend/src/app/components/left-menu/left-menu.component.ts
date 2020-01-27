import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sb2-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  navLinks;

  constructor() {
    this.navLinks = [
      { label: 'Dashboard', link: 'dashboard'},
      { label: 'Members', link: 'members'},
    ];
  }

  ngOnInit() {
  }

}
