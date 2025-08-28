import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, FormsModule],
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
    <app-home [pageName] = "pageName"></app-home>
  `,
  styleUrl: './app.css'
})
export class App {
  title: string = "Seyyit Battal ARVAS";
  name: string = 'Software Engineer';
  src: string = "https://yt3.googleusercontent.com/L7fPOHO5TwVC_qz78Yo8P0MuJAB8I4FdQmOY2HSW7Z4_AFJZgAHzJCKQXo7ek1sy0pj0dIzM2Xg=s900-c-k-c0x00ffffff-no-rj";
  width: number = 100;
  pageName: string = "Home Sayfası";
  submitButton(){
    console.log("Submit butonuna tıklandı.");
  }
  twoWayInput: string = "";
  onChange(value: string){
    this.twoWayInput = value;
    console.log(value);
  }

}
   