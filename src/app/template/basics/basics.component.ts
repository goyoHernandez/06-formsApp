import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  initForm = {
    product: '',
    price: 0,
    stock: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  Save = () => {
    console.log('Exito');
    this.myForm.resetForm({
      price: 0,
      stock: 0
    });
  }

  ValidProduct = (): boolean => {
    console.log(this.myForm);

    return this.myForm?.controls['product']?.invalid && this.myForm?.controls['product']?.touched;
  }

  ValidPrice = (): boolean => {
    return this.myForm?.controls['price']?.value < 1 && this.myForm?.controls['price']?.touched;
  }

}
