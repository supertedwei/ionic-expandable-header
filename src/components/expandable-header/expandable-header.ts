import { Component, Input } from '@angular/core';

@Component({
  selector: 'expandable-header',
  templateUrl: 'expandable-header.html'
})
export class ExpandableHeader {

  @Input('scrollArea') scrollArea: any;

  constructor() {

  }

  ngOnInit() {
    console.log(this.scrollArea)

    this.scrollArea.ionScroll.subscribe((ev) => {
      console.log(ev)
    })
  }

}
