/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scrimba-project';
}
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-customers></app-customers> -->
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  title : string = ''
  constructor() { }

  ngOnInit() {
    this.title='Hello World using Data binding';
    // We call a service that gets us the data
  }

}
