import { Component } from '@angular/core';
import { UserService } from '../../services/userService';

@Component({
  selector: 'app-read-user',
  imports: [],
  template:`
  <ul>
      @for (name of userService.users; track $index) {
        <li>
        {{name}}
        </li>
    }
  </ul>
  `
})
export class ReadUser {

  constructor(public userService : UserService){}

}
