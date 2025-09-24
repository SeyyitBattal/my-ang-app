import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-random-service',
  imports: [],
  templateUrl: './random-service.html',
  styleUrl: './random-service.css'
})

@Injectable({
  providedIn: "root"
})
export class RandomService {
  private randomNum = 0;

  constructor(){
    this.randomNum = Math.floor(Math.random() * 100);
    console.log("Random sayınız: " + this.randomNum);
  }

  get random(){
    return this.randomNum;
  }

}
