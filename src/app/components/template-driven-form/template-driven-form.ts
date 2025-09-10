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
    <form #frm = "ngForm" (ngSubmit) = "onSubmit(frm.value)">
      <input type="text" name="name" placeholder="Name" ngModel><br>
      <input type="text" name="surname" placeholder="Surname" ngModel><br>
      <select name="job" ngModel>
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
  styleUrl: './template-driven-form.css'
})
export class TemplateDrivenForm implements OnInit{
  @ViewChild("frm", {static:true}) frm: NgForm;

  ngOnInit(): void {
     console.log(this.frm.form);
 }

 onSubmit(data : {name:string, surname:string}){
console.log(`İsim: ${data.name}, Soyisim: ${data.surname}`);
 }

}
