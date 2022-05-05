import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person {
  name: string,
  favorites: Favorite[]
}

interface Favorite {
  id: number,
  name: string
}

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent {
  @ViewChild('myDynamicForm') myDynamicForm!: NgForm;

  person: Person = {
    name: 'Goyin',
    favorites: [
      {
        id: 1,
        name: 'soccer'
      },
      {
        id: 2,
        name: 'pes 2022'
      }
    ]
  };

  newFavorite: string = '';

  constructor() { }

  Save = () => {

  }

  ValidPersonName = (): boolean => {
    return this.myDynamicForm?.controls['personName']?.value.length === 0 && this.myDynamicForm?.controls['personName']?.touched;
  }

  DropFavorite = (i: number) => {
    this.person.favorites.splice(i, 1);
  }

  AddFavorite = () => {
    if (this.newFavorite) {
      const favorite: Favorite = {
        id: this.person.favorites.length + 1,
        name: this.newFavorite
      }

      this.person.favorites.push({ ...favorite });

      this.myDynamicForm?.controls['newFavorite']?.reset();
    }
  }
}
