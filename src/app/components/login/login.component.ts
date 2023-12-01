// login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    const { username, password } = this.loginForm.value;

    this.authService.authenticate(username, password).subscribe(
      response => {
        if (response && response.jwtToken) {
          // Redirige al usuario al logbook después de iniciar sesión
          console.log('volvio el token'+response.jwtToken)
          this.router.navigate(['/logs']);
        }
      },
      error => {
        console.error('Error de autenticación', error);
      }
    );
  }
}
