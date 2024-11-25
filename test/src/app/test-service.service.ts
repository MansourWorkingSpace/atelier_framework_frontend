import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestServiceService {
  users: any[] = [];
  constructor() {
    this.users = [
      {id:0,name:'ali',salary:1800},
      {id:1,name:'Salah',salary:1600},
      {id:2,name:'Ahmed',salary:2800},
      /*{id:3,name:'mohamed',salary:3900},
      {id:4,name:'Monji',salary:5800},
      {id:5,name:'Slim',salary:1200},*/
    ];
  }
}
