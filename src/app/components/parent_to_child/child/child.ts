import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  //templateUrl: './child.html',
  template: `
  <div>Child Component</div>
  <div>{{parentText}}</div>

  `,
  styleUrl: './child.css'
})
export class Child {
@Input() parentText: string = "";

}
