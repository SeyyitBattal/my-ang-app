import { Directive, ElementRef, HostBinding, HostListener, inject } from '@angular/core';

declare var $: any;

@Directive({
  selector: '[appExpDirective]'
})

export class ExpDirective{
private el = inject(ElementRef);

  constructor() {
    this.el.nativeElement.style.backgroundColor = "blue";
   }

   ngOnInit(): void{
    $(this.el.nativeElement).fadeOut(2000).fadeIn();
   }

   @HostListener("click")
   onClick(){
    alert("Nesneye tıklandı.");
   }

   @HostBinding("style.color")
   writingColor:string = "orange";

}
