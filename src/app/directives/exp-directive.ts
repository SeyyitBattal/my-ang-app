import { Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[appExpDirective]'
})

export class ExpDirective{
private el = inject(ElementRef);

  constructor() {
    this.el.nativeElement.style.backgroundColor = "blue";
   }

}
