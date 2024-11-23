import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypeCategory } from './model/TypeCategory';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeCategoryService {
  private apiUrl = 'http://localhost:9000/types';
  constructor(private http : HttpClient) {}
  getAllTypesCategories(): Observable<TypeCategory[]>{
    return this.http.get<TypeCategory[]>(this.apiUrl);
  }
}
