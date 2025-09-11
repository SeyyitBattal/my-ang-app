import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule],
  //templateUrl: './template-driven-form.html',
  template: ` 
  <div>
    <p>***Template Driven Form***</p>
<!--ngForm varsa Template Driven Formdur-->
<!--ngModel olarak işaretlenmeyenler form kontrollerine dahil olmaz-->
    <form #frm = "ngForm" (ngSubmit) = "onSubmit(frm.value)">
      <input type="text" name="name" placeholder="Name" ngModel><br>
      <input type="text" name="surname" placeholder="Surname" ngModel><br>
      <input type="email" name= "email" placeholder="Email" ngModel><br>
      <input type="tel" name="phone" placeholder="Phone" ngModel><br>
      <select name="job" ngModel>
        <option value="0">General Manager</option>
        <option value="1">Deputy General Manager</option>
        <option value="2">Technic Leader</option>
        <option value="3">Engineer</option>
        <option value="4">Intern</option>
      </select><br>
      <div ngModelGroup = "adress">
        <input type="text" name="country" placeholder="Country" ngModel><br>
        <input type="text" name="city" placeholder="City" ngModel><br>
        <input type="text" name="adress" placeholder="Adress" ngModel><br>
      </div>
      <button>Send</button>
    </form>
  </div>

  `,
  styleUrl: './template-driven-form.css'
})
export class TemplateDrivenForm implements OnInit{
  @ViewChild("frm", {static:true}) frm: NgForm;

  ngOnInit(): void {
    console.log(this.frm);
 }

 onSubmit(data : {name:string, surname:string, email:string, phone: number}){
console.log(`İsim: ${data.name}, Soyisim: ${data.surname}, Email: ${data.email}, Phone: ${data.phone}`);
console.log("Tek tek çekilmeden veriler: ", data);

console.log(`Value: ${this.frm.value}`);
console.log(`Valid: ${this.frm.valid}`);
console.log(`Touched: ${this.frm.touched}`);

 }

}
