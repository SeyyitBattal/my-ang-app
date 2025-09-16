import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

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
    <input type="mail" formControlName="mail" placeholder="Mail"><br>
    <div formGroupName = "adressGroup">
      <input type="text" formControlName="country" placeholder="Country"><br>
      <input type="text" formControlName="city" placeholder="City"><br>
      <input type="text" formControlName="adress" placeholder="Adress"><br>
      <input type="tel" formControlName="phone" placeholder="Phone"><br>
      
    </div>
  <button>Send</button>
  </form>  
  <button (click)="onlySelfButton()">onlySelf Valid Kontrolü</button> 
  </div>
  <p>Model driven form valid mi: {{frm.valid}} </p> 
  
  <hr>
  `,
  styleUrl: './model-driven-form.css'
})
export class ModelDrivenForm {
  frm: FormGroup;
  
  constructor(private formBuilder : FormBuilder){
    this.frm = formBuilder.group({
      name:["", Validators.required],
      surname:[""],
      job:[""],
      mail:["", [
        Validators.required,
        Validators.email
      ]],
      adressGroup: formBuilder.group({
        country:[""],
        city:[""],
        adress:[""],
        phone:["", [
          Validators.required,
          Validators.max(11)
        ]]
      })
    })
  }

  onSubmit(data: { name: string, surname: string, job: number }) {
    console.log(`İsim: ${data.name}, Soyisim: ${data.surname}, Meslek: ${data.job}`);

    console.log("Ayırmadan alınan veriler: ", data);
  }

  onlySelfButton(){
    this.frm.controls["name"].setValue("Arv", {onlySef:true});
  }

}
