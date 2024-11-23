import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ListEmployeesSComponent } from './list-employees-s/list-employees-s.component';
import { ListTypeCategoryComponent } from './list-type-category/list-type-category.component';

export const routes: Routes = [
    {path : 'about',component:AboutComponent},
    {path : 'home' ,component:HomeComponent},
    {path : 'contact',component:ContactComponent},
    {path : 'listemployeess',component:ListEmployeesSComponent},
    {path : 'listeTypeCategory',component:ListTypeCategoryComponent}
];
