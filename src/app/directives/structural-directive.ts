import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructuralDirective]'
})
export class StructuralDirective {

  constructor(
    private templateRef:TemplateRef<any>,
    private viewContainerRef: ViewContainerRef 
  ) { }

  //"selector"de ve "set"te yazan isim aynı olmalı. Sistem bu sayede nereye gideceğini bilir.
  @Input() set appStructuralDirective(value: boolean){
    if(value){
      this.viewContainerRef.createEmbeddedView(this.templateRef)
      //DOM nesnesine eklenmiş olur.
    }else{
      this.viewContainerRef.clear();
    }
  }

}
