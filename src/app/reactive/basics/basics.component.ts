import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  // myBasicForm: FormGroup = new FormGroup({
  //   'name': new FormControl('Jordan'),
  //   'price': new FormControl(2000),
  //   'stock': new FormControl(10)
  // });

  myBasicForm: FormGroup = this.fb.group({
    name: [, [Validators.required, Validators.minLength(3)]],
    price: [, [Validators.min(0), Validators.required]],
    stock: [, [Validators.min(0), Validators.required]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myBasicForm.reset({
      name: 'smarTV',
      price: 1,
      stock: 1
    })
  }

  ValidField = (id: string) => {
    return this.myBasicForm.controls[id].errors && this.myBasicForm.controls[id].touched;
  }

  Save = () => {
    if (this.myBasicForm.invalid) {
      this.myBasicForm.markAllAsTouched();
      return;
    }

    console.log(this.myBasicForm.value);
    this.myBasicForm.reset();
  }

}
