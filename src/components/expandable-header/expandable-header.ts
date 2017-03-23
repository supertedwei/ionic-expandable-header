import { Component } from '@angular/core';

@Component({
  selector: 'expandable-header',
  templateUrl: 'expandable-header.html'
})
export class ExpandableHeader {

  text: string;

  constructor() {
    console.log('Hello ExpandableHeader Component');
    this.text = 'Hello World';
  }

}
