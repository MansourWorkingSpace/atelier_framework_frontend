import { Component } from '@angular/core';
import { Categorie } from '../Models/categories';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../search-pipe.pipe';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-list-categories',
  standalone: true,
  imports: [NgForOf,NgIf,FormsModule,SearchPipe,HighlightDirective],
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.css'
})
export class ListCategoriesComponent {
  searchTitle: string = '';
  categories: Categorie[] = [
    { id: 1, title: 'Grand électroménager', image: 'images/categorie_electromenager.jpg', description: '', available: true },
    { id: 2, title: 'Petit électroménager', image: 'images/categorie_petit_electromenager.jpg', description: '', available: true },
    { id: 3, title: 'Produits informatiques', image: 'images/categorie_produits_informatiques.jpg', description: '', available: true },
    { id: 4, title: 'Smart Phones', image: 'images/categorie_smartPhone.jpg', description: '', available: true },
    { id: 5, title: 'TV, images et son', image: 'images/categorie_tv_image_son.jpg', description: '', available: true },
    { id: 6, title: 'Produits voiture', image: 'images/produits_nettoyages.jpg', description: '', available: false }
  ];
}
