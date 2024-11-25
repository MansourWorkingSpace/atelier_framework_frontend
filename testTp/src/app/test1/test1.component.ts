import { Component, inject, OnInit } from '@angular/core';
import { book } from '../book';
import { BooksService } from '../books.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test1.component.html',
  styleUrl: './test1.component.css',
})
export class Test1Component implements OnInit {
  books: book[] = [];
  booksservice = inject(BooksService);
  ngOnInit(): void {
    this.books = this.booksservice.getBooks();
  }
  clas(book: book) {
    if (book.prix > 25) {
      return 'rouge';
    } else if (book.prix > 10 && book.prix <= 25) {
      return 'orange';
    } else {
      return 'jaune';
    }
  }
}
