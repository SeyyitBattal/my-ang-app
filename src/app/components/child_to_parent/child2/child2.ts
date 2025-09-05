import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  imports: [],
  //templateUrl: './child2.html',
  template: `
  <div>Child 2 Component</div>
  <div>{{parentText2}}</div>

  `,
  styleUrls: ['./child2.css']
})
export class Child2 implements OnInit{
@Output() dataEvent: EventEmitter<any> = new EventEmitter();
@Input() parentText2:string = "";

ngOnInit():void{
  setTimeout(() => {
  this.dataEvent.emit({message: '***ChildToParent***'})
  },1000);
}
}
