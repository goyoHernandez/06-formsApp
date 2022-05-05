import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  mySwitchesForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    notifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue]
  });

  person = {
    gender: 'F',
    notifications: true
  }

  ngOnInit(): void {
    this.mySwitchesForm.reset({
      ...this.person,
      termsAndConditions: false
    });

    this.mySwitchesForm.valueChanges.subscribe(({ termsAndConditions, ...rest }) => {
      this.person = rest;
    });
  }

  Save = () => {
    const formValue = { ...this.mySwitchesForm.value };
    delete formValue.termsAndConditions;

    this.person = formValue;
    console.log(formValue);

  }

}
