import { Component, inject, OnInit } from '@angular/core';
import { TypeCategoryService } from '../type-category.service';
import { TypeCategory } from '../model/TypeCategory';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-type-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-type-category.component.html',
  styleUrl: './list-type-category.component.css',
})
export class ListTypeCategoryComponent implements OnInit {
  typeCategories:TypeCategory[]=[];
  typeCategorieService = inject(TypeCategoryService);
  getAllTypesCategories(): void {
    this.typeCategorieService.getAllTypesCategories().subscribe(
      (data)=>{
        this.typeCategories = data;
        console.log('catégories récupérées avec succés!',this.typeCategories);
      },(error)=>{
        console.error('erreur lors de la récupération des catégories',error);
      }
      );
  }
  ngOnInit(): void {
    this.getAllTypesCategories();
  }
 
}
