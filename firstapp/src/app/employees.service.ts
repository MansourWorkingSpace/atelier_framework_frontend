import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  getEmployees() {
    return [
      { id: 1, nom: 'alya', age: 30 },
      { id: 2, nom: 'larine', age: 28 },
      { id: 3, nom: 'bader', age: 5 },
      { id: 4, nom: 'ali', age: 14 },
      { id: 5, nom: 'ahmed', age: 10 },
      { id: 6, nom: 'takwa', age: 8 },
    ];
  }
  constructor() {}
}
