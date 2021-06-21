import { AbstractControl,ValidationErrors } from "@angular/forms";

export class customvalidation
{
  static NoWhiteSpace(control:AbstractControl):ValidationErrors | null{
    if((control.value).match(" "))
    {
      return {
        noSpace:true
      }
    }
    return null;

  }
}
