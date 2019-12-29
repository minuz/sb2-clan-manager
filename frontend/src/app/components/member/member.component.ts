import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sb2-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  @Input() member: any;

  constructor() { }

  ngOnInit() {
  }

}
