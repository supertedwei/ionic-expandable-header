import { Component } from '@angular/core';

/*
  Generated class for the ExpandableHeader component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'expandable-header',
  templateUrl: 'expandable-header.html'
})
export class ExpandableHeaderComponent {

  text: string;

  constructor() {
    console.log('Hello ExpandableHeader Component');
    this.text = 'Hello World';
  }

}
