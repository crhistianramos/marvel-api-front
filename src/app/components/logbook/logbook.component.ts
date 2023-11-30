// logbook.component.ts

import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/logbook.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logbook',
  templateUrl: './logbook.component.html',
  styleUrls: ['./logbook.component.scss']
})
export class LogbookComponent implements OnInit {
  logs: any[] = [];

  constructor(private logService: LogService, private router: Router) { }

  ngOnInit(): void {
    this.loadLogs();
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


navigateToCatalogo() {
  this.router.navigate(['/catalogo']);
}

}
