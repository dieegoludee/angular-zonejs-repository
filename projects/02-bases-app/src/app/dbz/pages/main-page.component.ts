import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor() {}

  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000,
    },
    {
      name: 'Goku',
      power: 9500,
    },
    {
      name: 'Vegeta',
      power: 7500,
    },
  ];

  onNewCharacter(character: Character): void {
    // this.characters.unshift(character); // agregar elemento al inicio del array
    this.characters.push(character); // agregar elemento al final del array
  }

  onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  }
}
