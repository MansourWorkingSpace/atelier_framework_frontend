import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from './model/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantSService {
  private apiUrl = 'http://localhost:9000/Etudiant';
  constructor(private http:HttpClient) { }
  addEtudiant(Etud:Etudiant):Observable<any>{
    return this.http.post(`${this.apiUrl}/add`,Etud);
  }
  getEtudiant(): Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(this.apiUrl);
  }
}
