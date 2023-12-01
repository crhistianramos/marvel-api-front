import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8081/api/marvel/characters';

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.get(this.apiUrl, { headers });
  }

  getCharacterInfo(characterId: number): Observable<Character> {
    const url = `${this.apiUrl}/${characterId}`;
    return this.http.get<Character>(url);
  }

}
