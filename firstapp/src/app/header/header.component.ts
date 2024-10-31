import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { CommonModule, NgStyle } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,HomeComponent,RouterModule,ContactComponent,AboutComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 height={'height' : '70px'};
 checked=false;
  kaberheader(){
    if(!(this.checked)){
      this.height={'height' : '200px'};
      this.checked=true;
    }else{
      this.height={'height' : '70px'};
      this.checked=false;
    }
  }
}
