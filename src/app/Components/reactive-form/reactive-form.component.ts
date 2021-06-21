import { customvalidation } from './Custom-validation';
import { Component, OnInit } from '@angular/core';
import {FormControl,AbstractControl,FormGroup, Validators} from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

form:FormGroup=new FormGroup({
  userName:new FormControl("",[Validators.required]),
  password:new FormControl("",[Validators.required,Validators.minLength(8),customvalidation.NoWhiteSpace])
});
title:String="ReactiveForm";
  constructor() { }

  get userName():AbstractControl | null{
  return this.form.get('userName');
}
get password():AbstractControl | null{
  return this.form.get('userName');
}


TestingMetod()
{

return 1010;
}

}

