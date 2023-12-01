// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8081';
  private token: string | null = null;
  private tokenExpirationTime: Date | null = null;

  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string): Observable<any> {
    const credentials = { usuario: username, clave: password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(`${this.apiUrl}/public/authenticate`, credentials, { headers })
      .pipe(
        map(response => {
          if (response && response.jwtToken) {
            this.setToken(response.jwtToken, response.expiresIn);
          }
          return response;
        }),
        catchError(error => {
          return throwError('Error en la autenticación');
        })
      );
  }

private setToken(token: string, expiresIn: number): void {
  // Almacena el token en el servicio de autenticación
  this.token = token;

  // Calcula la fecha de expiración del token
  const expirationTime = new Date();
  expirationTime.setTime(expirationTime.getTime() + expiresIn * 1000);
  this.tokenExpirationTime = expirationTime;
}


  getToken(): string | null {
    // Obtiene el token del servicio de autenticación
    return this.token;
  }

  getIsLoggedIn(): boolean {
    const hasToken = !!this.token;
    const isTokenNotExpired = !!this.tokenExpirationTime && this.tokenExpirationTime > new Date();
    console.log('validando');
    console.log('hasToken :'+hasToken);
    return hasToken;
  }
}
