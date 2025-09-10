import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-model-driven-form',
  imports: [ReactiveFormsModule],
  //templateUrl: './model-driven-form.html',
  template: `
  <div>
  <p>***Model Driven Form***</p>  
  <form [formGroup] = "frm" (ngSubmit) = "onSubmit(frm.value)">
    <input type="text" formControlName = "name" placeholder="Name"><br>
    <input type="text" formControlName = "surname" placeholder="Surname"><br>
    <select formControlName = "job">
        <option value="0">General Manager</option>
        <option value="1">Deputy General Manager</option>
        <option value="2">Technic Leader</option>
        <option value="3">Engineer</option>
        <option value="4">Intern</option>
    </select><br>
<button>Send</button>
  </form>  
  </div>
  `,
  styleUrl: './model-driven-form.css'
})
export class ModelDrivenForm implements OnInit {
  frm: FormGroup;

  ngOnInit(): void {
      this.frm = new FormGroup({
        name: new FormControl(),
        surname: new FormControl(),
        job: new FormControl()
      });
  }

  onSubmit(data: {name: string, surname: string, job:number}){
    console.log(`İsim: ${data.name}, Soyisim: ${data.surname}, Meslek: ${data.job}`);
  }
  
}
