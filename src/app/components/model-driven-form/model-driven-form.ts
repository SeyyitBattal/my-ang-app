import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";

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
  </form><hr>  
  </div>
  `,
  styleUrl: './model-driven-form.css'
})
export class ModelDrivenForm {
  frm: FormGroup;

  constructor(private formBuilder : FormBuilder){
    this.frm = formBuilder.group({
      name:[""],
      surname:[""],
      job:[""]
    })

  }


  onSubmit(data: { name: string, surname: string, job: number }) {
    console.log(`İsim: ${data.name}, Soyisim: ${data.surname}, Meslek: ${data.job}`);

    console.log("Ayırmadan alınan veriler: ", data);
  }

}
