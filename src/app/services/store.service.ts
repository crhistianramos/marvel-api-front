import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart: Character[] = [];
  private myCart = new BehaviorSubject<Character[]>([]);
  public myCart$ = this.myCart.asObservable();

  constructor() { }

  addcharacter(character: Character): void {
    this.myShoppingCart.push(character);
    this.myCart.next(this.myShoppingCart);
  }

}
