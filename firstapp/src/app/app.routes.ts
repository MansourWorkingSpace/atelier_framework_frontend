import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ListEmployeesSComponent } from './list-employees-s/list-employees-s.component';
import { FormRFComponent } from './form-rf/form-rf.component';
import { FormTDComponent } from './form-td/form-td.component';

export const routes: Routes = [
    {path : 'about',component:AboutComponent},
    {path : 'home' ,component:HomeComponent},
    {path : 'contact',component:ContactComponent},
    {path : 'listemployeess',component:ListEmployeesSComponent},
    {path : 'formrf',component:FormRFComponent},
    {path : 'formtd',component:FormTDComponent}
];
