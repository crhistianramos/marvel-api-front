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

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.apiService.getAllCharacters()
      .subscribe(res => {
        this.characters = res;
      });
  }
 
  navigateToLogs() {
    this.router.navigate(['/logs']);
  }
}
