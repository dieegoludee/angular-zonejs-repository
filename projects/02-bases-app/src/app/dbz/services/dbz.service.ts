import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  constructor() {}

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
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
