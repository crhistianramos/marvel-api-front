import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { StoreService } from 'src/app/services/store.service';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  public shoppingCart: Character[] = [];
  public total = 0;

  public characters: Character[] = [];

  constructor(
    private apiService: ApiService,
    private StoreService: StoreService
  ) { }

  ngOnInit(): void {
    this.apiService.getAllCharacters()
      .subscribe(res => {
        this.characters = res;
      });
  }

  addProductToCart(p: Character): void {
    // Add character con RxJS
    this.StoreService.addcharacter(p);

    // Add character sin RxJS
    this.shoppingCart.push(p);
    this.total += p.precio;
  }

}
