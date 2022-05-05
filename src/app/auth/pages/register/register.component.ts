import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';
// import { DontBeStrider, emailPattern, nameLastName } from 'src/app/shared/validators/validations';
import { ValidatorService } from 'src/app/shared/validators/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  myregisterForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorService.nameLastName)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailService]],
    username: ['', [Validators.required, this.validatorService.DontBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]]
  }, {
    validators: [this.validatorService.EqualFields('password', 'confirmPassword')]
  });

  get emailErrorMsg(): string {
    const errors = this.myregisterForm.get('email')?.errors;

    return errors?.['required'] ? 'El email es obligatorio.' :
      errors?.['pattern'] ? 'Formato incorrecto.' :
        errors?.['duplicateEmail'] ? 'Correo existente.' :
          '';
  }

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailService: EmailValidatorService
  ) { }

  ngOnInit(): void {
    this.myregisterForm.reset({
      name: 'Goyin Munoz',
      email: 'test1@test.com',
      username: 'kingGoyo',
      password: '123456',
      confirmPassword: '123456'
    })
  }

  ValidField = (field: string) => {
    return this.myregisterForm.get(field)?.invalid && this.myregisterForm.get(field)?.touched;
  }

  Save = () => {
    this.myregisterForm.markAllAsTouched();
  }



  // EmailRequired = () => {
  //   return this.myregisterForm.get('email')?.errors?.['required'] && this.myregisterForm.get('email')?.touched;
  // }

  // EmailFormat = () => {
  //   return this.myregisterForm.get('email')?.errors?.['pattern'] && this.myregisterForm.get('email')?.touched;
  // }

  // EmailDuplicate = () => {
  //   return this.myregisterForm.get('email')?.errors?.['duplicateEmail'] && this.myregisterForm.get('email')?.touched;
  // }

}
