import { Component, OnInit } from '@angular/core';

@Component({
  selector   : 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls  : ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:member-ordering
  top_nav_list: any = ['News', 'Pinsights', 'Company', 'Gallery', 'Products'];
}
