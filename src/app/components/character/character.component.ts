// character.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { Character } from '../../interfaces/character.interface';
import { PopupComponent } from '../../popup/popup.component';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  @Input() character!: Character;
  @Output() addProduct = new EventEmitter<Character>();

  constructor(private dialog: MatDialog, private apiService: ApiService) { }

  openPopup() {
    // Consume el servicio antes de abrir el popup
    this.apiService.getCharacterInfo(this.character.id).subscribe(
      (characterInfo) => {
        // Abre el popup con la información obtenida
        this.dialog.open(PopupComponent, {
          data: { character: characterInfo },
          width: '400px',
        });
      },
      (error) => {
        console.error('Error obteniendo información del personaje', error);
      }
    );
  }
}
