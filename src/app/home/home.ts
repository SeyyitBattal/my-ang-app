import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  //templateUrl: './home.html',
  template: `
  <h2>Bu sayfanın adı: {{pageName}}</h2>
  ` ,
  styleUrl: './home.css'
})
export class Home {
  @Input() pageName: string = ""; //App'ten geliyor ancak ilk değer vermeden geçilemiyor. Çözüm: tsconfig dosyasında "strict": false yapmak.

}



