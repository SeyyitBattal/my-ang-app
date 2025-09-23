import { Component, Inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { FormsModule } from '@angular/forms';
import { ExpDirective } from './directives/exp-directive';
import { StructuralDirective } from './directives/structural-directive';
import { ForDirective } from "./directives/for-directive";
import { UpperCasePipe, CurrencyPipe, DatePipe, SlicePipe, TitleCasePipe } from '@angular/common';
import { CustomPipe } from './pipes/custom-pipe';
import { Parent } from './components/parent_to_child/parent/parent';
import { Child2 } from './components/child_to_parent/child2/child2';
import { LchComponent } from './components/lch-component/lch-component';
import { TemplateDrivenForm } from './components/template-driven-form/template-driven-form';
import { ModelDrivenForm } from './components/model-driven-form/model-driven-form';
import { ImprovedMdf } from "./components/improved-mdf/improved-mdf";
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { LoadingService, ProductService } from './components/productService';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, Home, FormsModule, CustomPipe,
    ExpDirective, StructuralDirective, ForDirective,
    UpperCasePipe, CurrencyPipe, DatePipe, SlicePipe, TitleCasePipe,
    Parent, Child2, LchComponent, TemplateDrivenForm, ModelDrivenForm,
    ImprovedMdf,
],
  providers:[
    LoadingService,
    {provide: "stringProviderExample", useValue: "Bu yazı useValue ile geldi"}, 
    {
      provide: "productService", useFactory: (httpClient:HttpClient, loadingService:LoadingService) => {
        const obs = httpClient.get("https://jsonplaceholder.typicode.com/posts");
        const data = firstValueFrom(obs);
        console.log(data);
        return new ProductService(loadingService);
    }, deps:[HttpClient, LoadingService]}
  ],
  //templateUrl: './app.html',
  template:`
    <h1 style="color: aqua;">ANGULAR</h1>
    <div>Hello {{title}}!</div>
    <p>Meslek: {{name}}</p>
    <img [src] = "src" [width] = "width">
    <br>
    <input type="text" value = "-" >
    <br >
    <button (click) = "submitButton()">SUBMIT</button>
    <br>
    <input type="text" [(ngModel)] = "twoWayInput" (ngModelChange) = "onChange($event)"> <!-- FormsModule import edilmesi unutulmamalıdır.-->
    <br>
    {{twoWayInput}}
    {{person.name + " " + person.surname}}
    @for (user of users; track user){
      <li>{{ user }}</li>
    }
    <span>4 karakterden az olan isimler: {{shortNames.join(', ')}}</span>
    <app-home [pageName] = "pageName"></app-home>

    <hr>
    
    <div appExpDirective>ExpDirective (Attribute)</div>
    <div *appStructuralDirective = "true">Bu bir structural-directive</div>
    <div *appForDirective = "cities; let city, let number = index">{{number}} - {{city}}</div>

    <hr>

    <p>{{pipeName | uppercase }}</p>
    <p>{{10000000 | currency:'₺'}}</p>
    <p>{{'03.30.1997' | date}} 
      / {{'03.30.1997' | date: 'fullDate' }} 
      / {{'03.30.1997 14:53' | date : 'medium'}} 
    </p>
    <p>{{['a','n','g','u','l','a','r'] | slice : 2 : 5}}</p>
    <p>{{"title case pipe ile ilk harfler büyütüldü." | titlecase}}</p>
    <p>{{"Rahat yat, rahat kalkma..." | custom : 6 : 17}}</p>

    <hr>

  <app-parent></app-parent>
  <app-child2></app-child2>

  <hr>

  <app-lch-component data="InputGiris">xxx</app-lch-component>
  <!-- Component oluştururken data ile veri değiştiği için önce onChange tetiklenir -->
  <!-- Daha sonra component oluştuğu için onInit tetiklenir -->
  
  <hr>

  <app-template-driven-form></app-template-driven-form>
  <app-model-driven-form></app-model-driven-form>
  <app-improved-mdf></app-improved-mdf>

  `,
  styleUrls: ['./app.css']
})
export class App{
  
  constructor( 
      @Inject("stringProviderExample") value: string,
      @Inject("productService") private productService:ProductService){
        console.log("useValue ile gelen değer: ", value);
        console.log(productService.getProducts());
      }

  title: string = "Seyyit Battal ARVAS";
  name: string = 'Software Engineer';
  src: string = "https://yt3.googleusercontent.com/L7fPOHO5TwVC_qz78Yo8P0MuJAB8I4FdQmOY2HSW7Z4_AFJZgAHzJCKQXo7ek1sy0pj0dIzM2Xg=s900-c-k-c0x00ffffff-no-rj";
  width: number = 100;
  pageName: string = "Home Sayfası";
  twoWayInput: string = "";
  person: {name:any, surname:string} = {name: 3233243, surname: "Arv"};
  users: string[] = ["Ali", "Ayşe", "Can", "Veli", "Osman", "Ahmet", "ab", "Fatih", ];
  cities: string[] = ["İstanbul", "Ankara", "Van", "İzmir", "Konya"];
  pipeName: string = "Pipe kullanılmış text";

  shortNames: string[] = [];

  submitButton(){
    console.log("Submit butonuna tıklandı.");
  }

  onChange(value: string){
    this.twoWayInput = value;
    console.log(value);
  }

  ngOnInit(){
    this.showShortNames();
  }

  showShortNames(){
    for(const user of this.users){
      if(user.length < 4){
        this.shortNames.push(user);
      }
    }
  }

}
   