import { Component } from '@angular/core';
import { Child } from '../child/child';
import { Child2 } from '../../child_to_parent/child2/child2';

@Component({
  selector: 'app-parent',
  imports: [Child, Child2],
  //templateUrl: './parent.html',
  template:`
  <div>Parent Component</div>
  <app-child [parentText]= "parentText"></app-child>
  <app-child2 [parentText2] = "parentText2"></app-child2>
  `,
  styleUrl: './parent.css'
})
export class Parent {
  parentText: string = "Parent_1 den child_1 e gönderilen metin";
  parentText2: string = "Parent_1 den child_2 ye gönderilen metin";


}
