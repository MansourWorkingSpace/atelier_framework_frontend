import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe',
  standalone : true,
})
export class SearchPipe implements PipeTransform {
  transform(categories: any[], searchString: string): any[] {
    if (!categories) return [];
    if (!searchString) return categories;
    searchString = searchString.toLowerCase();
    return categories.filter((category) =>
      category.title.toLowerCase().includes(searchString)
    );
  }
}
