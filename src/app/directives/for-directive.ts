import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appForDirective]'
})
export class ForDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  @Input() set appForDirective(value: string[]){
    for(let i=0; i<value.length; i++){
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        $implicit: value[i]
      })
    }
  }

}
