import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.page.html',
  styleUrls: ['./test1.page.scss'],
})
export class Test1Page implements OnInit {

  @Input() name: string;
  @Input() testFunction: any;

  constructor() { }

  ngOnInit() {
  }

}
