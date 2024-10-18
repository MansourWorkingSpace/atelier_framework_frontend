import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '4thapp';
  names: any[]=[];
  name = {id:1,esm:''};
  test: any;
  detail={id:0,esm:''};
  addName(){
    /*if(this.names.length==0){
      this.name.id=1
    }else{
      this.name.id=this.names[this.names.length-1].id+1;
    }*/
    this.names.push({
      id:this.name.id,
      esm:this.name.esm,
    });
   
    this.name.esm='';
    this.name.id++;
  }
  delete(i:number){  
      this.names.splice(i,1);
  }
  modifier(i:number){
    const test = prompt("veuillez entrer le nouveau nom");
    if(test){
      this.names[i].esm= test;
    }
  }
  details(i:number){
    this.detail={id:this.names[i].id,esm:this.names[i].esm};
  }
  
}
