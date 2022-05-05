import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent implements OnInit {

  myDinamicForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favorites: this.fb.array([
      ['Metal gear', Validators.required],
      ['Walking dead', Validators.required],
    ], Validators.required)
  });

  newFavorite: FormControl = this.fb.control('', Validators.required);

  get favoritesArray() {
    return this.myDinamicForm.get('favorites') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  Save = () => {
    if (this.myDinamicForm.invalid) {
      this.myDinamicForm.markAllAsTouched();
      return;
    }

    console.log(this.myDinamicForm.value);
    this.myDinamicForm.reset();
  }

  ValidField = (id: string) => {
    return this.myDinamicForm.controls[id].errors && this.myDinamicForm.controls[id].touched;
  }

  AddFavorite = () => {
    if (this.newFavorite.invalid)
      return;

    // this.favoritesArray.push(new FormControl(this.newFavorite.value, Validators.required));
    this.favoritesArray.push(this.fb.control(this.newFavorite.value, Validators.required));
    this.newFavorite.reset();
  }

  Drop = (i: number) => {
    this.favoritesArray.removeAt(i);
  }
}
