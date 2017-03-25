import { Component, Input, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'expandable-header',
  templateUrl: 'expandable-header.html'
})
export class ExpandableHeader {

  @Input('scrollArea') scrollArea: any;

  headerHeight: any;
  newHeaderHeight

  constructor(public element: ElementRef, public renderer: Renderer) {

    this.headerHeight = 150

    this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px')

  }

  ngOnInit() {
    console.log(this.scrollArea)

    this.scrollArea.ionScroll.subscribe((ev) => {
      this.resizeHeader(ev);
    })
  }

  resizeHeader(ev) {

    ev.domWrite(() => {

      this.newHeaderHeight = this.headerHeight - ev.scrollTop

      if(this.newHeaderHeight < 0){
        this.newHeaderHeight = 0;
      } 

      this.renderer.setElementStyle(this.element.nativeElement, 'height', this.newHeaderHeight + 'px');

      for (let headerElement of this.element.nativeElement.children) {
        
        let totalHeight = headerElement.offsetTop + headerElement.clientHeight

        if (totalHeight > this.newHeaderHeight) {
          this.renderer.setElementStyle(headerElement, 'opacity', '0');
        }  else {
          this.renderer.setElementStyle(headerElement, 'opacity', '1');
        }

      }


    })

  }

}
