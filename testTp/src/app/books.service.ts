import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  getBooks(){
    return[
      {id:1,titre:'Le Petit Prince',description:'Un livre philosophique et poétique',prix:15.99,qte:10,dispo:true},
      {id:2,titre:'1984',description:'Un roman dystopique',prix:12.5,qte:0,dispo:false},
      {id:3,titre:'Les Misérables',description:"Un chef d'oeuvre de Victor Hugo",prix:25,qte:5,dispo:true},
      {id:4,titre:'Harry Potter et la pierre philosophale',description:'Le premier tome de la célèbre série',prix:20,qte:15,dispo:true},
      {id:5,titre:'Les Misérables',description:'Une épopée de Victor Hugo',prix:25.99,qte:0,dispo:false},
      {id:6,titre:'Pride and Prejudice',description:'Un classique de Jane Austen',prix:14.99,qte:6,dispo:true},
      {id:7,titre:'To Kill a Mockingbird',description:'Un roman poignant de Harper Lee',prix:16.99,qte:10,dispo:true},
      {id:8,titre:'Atomic Habits',description:'Créer de nouveaux votre habitudes',prix:7,qte:10,dispo:true}
    ];
  }
  constructor() { }
}
