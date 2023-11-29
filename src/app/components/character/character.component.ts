// character.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';  // Asegúrate de importar MatDialog
import { PopupComponent } from '../../popup/popup.component';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  @Input() character!: Character;
  @Output() addProduct = new EventEmitter<Character>();

  constructor(private dialog: MatDialog) { }

  openPopup() {
    this.dialog.open(PopupComponent, {
      data: { character: this.character },
      width: '400px',
    });
  }
}
