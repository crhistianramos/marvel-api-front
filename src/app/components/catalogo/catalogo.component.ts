// catalogo.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Character } from '../../interfaces/character.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  public characters: Character[] = [];
  public isLoading: boolean = false; // Nueva variable para controlar la visibilidad del spinner

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.isLoading = true; // Mostrar el spinner al iniciar la carga

    this.apiService.getAllCharacters()
      .subscribe(
        res => {
          this.characters = res;
        },
        error => {
          console.error('Error fetching characters:', error);
        }
      )
      .add(() => {
        this.isLoading = false; // Ocultar el spinner cuando la carga se completa (ya sea éxito o error)
      });
  }

  navigateToLogs(): void {
    this.router.navigate(['/logs']);
  }
}
