import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nameLastName: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  DontBeStrider = (control: FormControl): ValidationErrors | null => {
    const value = control.value?.trim().toLowerCase();

    if (value == 'strider') {
      return {
        noStrider: true
      }
    }
    return null;
  }

  EqualFields = (field1: string, field2: string) => {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password = formGroup.get(field1)?.value;
      const confirmPassword = formGroup.get(field2)?.value;

      if (password !== confirmPassword) {
        formGroup.get(field2)?.setErrors({ noEquals: true });
        return {
          noEquals: true
        }
      }
      formGroup.get(field2)?.setErrors(null);
      return null;
    }
  }
}
