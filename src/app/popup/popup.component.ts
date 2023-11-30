// popup.component.ts

import { Component, Inject, ViewEncapsulation  } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  encapsulation: ViewEncapsulation.None 
})
export class PopupComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { character: any }) { }

  addToShoppingCart(character: any): void {
    // Aquí puedes agregar la lógica para agregar al carrito
    console.log('Agregado al carrito:', character);
  }
}
