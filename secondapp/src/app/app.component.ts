import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { url } from 'node:inspector';
import { FormsModule } from '@angular/forms';//import forms module
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'secondapp';
  imageUrl: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbOFmjGchTMwQriXqezOovYKqXWK3YXUnFlQ&s'
  btn : boolean = true;
  message:string='';
  eventTest(){
    this.message='button clicked';
  }
  userText:string='';
  onInput(event:Event):void{
    const inputElement = event.target as HTMLInputElement;
    this.userText = inputElement.value;
  }
  text:string='';
  imgurl=""
  image:boolean=true;

}
