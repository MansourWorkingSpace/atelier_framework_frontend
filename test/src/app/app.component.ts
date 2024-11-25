import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestServiceService } from './test-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'test';
  users:any;
  length=0;
  clas='';
  styl={'background-color' : 'blue'};
  constructor(private test : TestServiceService){}
  ngOnInit(): void {
    this.users=this.test.users;
    this.length=this.users.length;
    if(this.length>5){
      this.clas='red';
      this.styl={'background-color' : 'blue'};
    }else{
      this.clas='blue';
      this.styl={'background-color' : 'red'};
    }
  }
  
}
