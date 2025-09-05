import { Component } from '@angular/core';
import { Child2 } from '../child2/child2';

@Component({
  selector: 'app-parent2',
  imports: [Child2],
  //templateUrl: './parent2.html',
  template: `
  <p>Parent 2 Component</p>
<app-child2 (dataEvent) = "childEvent($event)"></app-child2>

  `,
  styleUrls: ['./parent2.css']
})
export class Parent2 {
childEvent(obj:any){
    console.log("Childtan parenta gönderilen data: ", obj);
    console.log("Childtan parenta gönderilen text: " + obj.message);
    console.log(`Childtan parenta gönderilen text: ${obj.message}`);
}

}
