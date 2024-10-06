import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  title = 'thirdapp';
  hero={name:'',power:0,imageUrl:''};
  heros:any[]=[];
  ajout(){
    this.heros.push(this.hero);
    this.hero={name:'',power:0,imageUrl:''};
    console.log(this.heros);
  }
  creation(){
    
  }
}
