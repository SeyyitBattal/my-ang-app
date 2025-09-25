import { Component } from '@angular/core';
import { UserService } from '../../services/userService';
import { ReadUser } from "../read-user/read-user";

@Component({
  selector: 'app-create-user',
  imports: [ReadUser],
  template: `
  <input type="text" name="name" #txtname placeholder="Name">
  <button (click)= "btnCreate(txtname.value)">Create</button>
  <app-read-user></app-read-user>
  `
})
export class CreateUser {

  constructor(private userService:UserService){}

btnCreate(name:string){
this.userService.addUser(name);
}

}
