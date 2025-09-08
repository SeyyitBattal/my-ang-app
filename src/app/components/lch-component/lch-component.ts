import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lch-component',
  imports: [],
  //templateUrl: './lch-component.html',
  template: `
  <div>Burası lch-component</div>
  `,
  styleUrl: './lch-component.css'
})
export class LchComponent implements OnChanges, OnInit {
@Input() data:string="";

  ngOnChanges(changes: SimpleChanges): void {
    console.log("1. ngOnChanges");
}

ngOnInit(): void {
    console.log("2. ngOnInit");
}

}
