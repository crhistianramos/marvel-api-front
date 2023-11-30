import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(private router: Router) { }

  navigateToCatalogo(): void {
    console.log('Antes de navegar a Catalogo');
    this.router.navigate(['/catalogo']);
    console.log('Después de navegar a Catalogo');
  }

  navigateToLogs(): void {
    console.log('Antes de navegar a Logs');
    this.router.navigate(['/logs']);
    console.log('Después de navegar a Logs');

  }
}
