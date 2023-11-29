import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  @Input() character!: Character;
  @Output() addProduct = new EventEmitter<Character>();

  constructor() { }

  addToShoppingCart(p: Character): void {
    this.addProduct.emit(p);
  }

}
