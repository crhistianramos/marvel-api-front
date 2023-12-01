import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestNameService {

  private testName = 'Marvel-Api';

  constructor() { }

  getTestName(): string {
    return this.testName;
  }
}
