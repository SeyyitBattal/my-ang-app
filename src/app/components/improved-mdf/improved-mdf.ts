import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BigFirstLetter } from '../../validators/big-first-letter';

@Component({
  selector: 'app-improved-mdf',
  imports: [ReactiveFormsModule, JsonPipe],
  //templateUrl: './improved-mdf.html',
  template:`
  <div>Improved Model Driven Form</div>
  <form [formGroup] = "frm" (ngSubmit) = "onSubmit(frm.value)">
    Name and Surname 
    <input type="text" formControlName="nameSurname" placeholder="Name and Surname">
    @if (nameSurname.hasError('minlength') && nameSurname.value?.length > 0 
    && (nameSurname.dirty || nameSurname.touched)) {
  <span style="color:red">Please enter minimum {{nameSurname.errors?.['minlength']?.requiredLength}} characters</span>
    }<br>
    Email
    <input type="mail" formControlName="email" placeholder="Email">
    @if(!email.valid && (email.dirty || email.touched)){
      <span style="color: red">{{email.errors | json}}</span>
    }<br>
    Phone
    <input type="tel" formControlName="tel" placeholder="Phone">
    Job
    <select formControlName="job">
      <option value="0">Engineer</option>
      <option value="1">Teacher</option>
      <option value="2">Manager</option>
      <option value="3">Captain</option>
    </select>
    <div formGroupName="address">
      City
      <input type="text" formControlName="city" placeholder="city">
      @if(!city.valid && city.value?.length >0){
        <span style="color: red">{{city.errors | json}}</span>
      }<br>
      Region
      <input type="text" formControlName="region" placeholder="Region">
    </div>
    <button>Register</button><br>
    <button (click)="markAsTouched()">markAsTouched</button>
    <button (click)="markAllAsTouched()">markAllAsTouched</button>
    <button (click)="markAsUnTouched()">markAsUnTouched</button>
    <button (click)="markAsDirty()">markAsDirty</button>
    <button (click)="markAsPristine()">markAsPristine</button>
    <button (click)="disable()">disable</button>
    <button (click)="enable()">enable</button>

    <p>form touched: {{frm.touched}}</p>
    <p>'name and surname' input touched: {{frm.get('nameSurname').touched}}</p>
    <p>form group (city) touched: {{frm.get('address').get('city').touched}}</p>
    <p>form group (region) touched: {{frm.get('address').get('region').touched}}</p>
    <p>form untouched: {{frm.untouched}}</p>
    <p>form dirty: {{frm.dirty}}</p>
    <p>form pristine: {{frm.pristine}}</p>
  </form><hr>
  `,
  styleUrl: './improved-mdf.css'
})
export class ImprovedMdf {  
  frm:FormGroup;

  constructor(private formBuilder : FormBuilder){
    this.frm = formBuilder.group({
      nameSurname:["", [Validators.required, Validators.minLength(3)]],
      email:["", Validators.email],
      tel:["", [Validators.minLength(5), Validators.maxLength(25)]],
      job:[""],
      address: formBuilder.group({
        city:["", BigFirstLetter(3)],
        region:[""]
      })
    })
  }

  get nameSurname(){
    return this.frm.get("nameSurname");
  }

  get email(){
    return this.frm.get("email");
  }

  get tel(){
    return this.frm.get("tel");
  }

  get city(){
    return this.frm.get("address").get("city");
  }

  get region(){
    return this.frm.get("address").get("region");
  }


  onSubmit(data : {nameSurname:string, email:string, tel:string, job:string, city:string, region:string}){
    console.log(data);
}

markAsTouched(){
  this.frm.markAsTouched();
}

markAllAsTouched(){
this.frm.get("address").markAllAsTouched();
}

markAsUnTouched(){
this.frm.markAsUntouched();
}

markAsDirty(){
this.frm.markAsDirty();
}

markAsPristine(){
this.frm.markAsPristine();
}

disable(){
this.frm.get("nameSurname").disable();
}

enable(){
this.frm.get("nameSurname").enable();
}

}
