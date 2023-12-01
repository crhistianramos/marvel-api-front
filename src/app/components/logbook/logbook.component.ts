import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/logbook.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-logbook',
  templateUrl: './logbook.component.html',
  styleUrls: ['./logbook.component.scss']
})
export class LogbookComponent implements OnInit {
  logs: any[] = [];
  isLoggedIn: boolean = false;
  displayedColumns: string[] = ['service', 'timestamp', 'characterId']; // Agrega las columnas que quieras mostrar

  constructor(private logService: LogService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.checkLoginStatus();
    
    // Redirige al usuario al login si no está autenticado
    if (!this.isLoggedIn) {
      this.router.navigate(['/login']);
    } else {
      this.loadLogs();
    }
  }

  loadLogs() {
    this.logService.getAllLogs().subscribe(
      (data: any[]) => {
        this.logs = data;
      },
      (error) => {
        console.error('Error fetching logs:', error);
      }
    );
  }

  checkLoginStatus() {
    this.isLoggedIn = this.authService.getIsLoggedIn();
  }
}
