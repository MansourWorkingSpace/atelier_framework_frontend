import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,NgStyle],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  bg_color={'background-color':'white'};
  bg_inscri(){
    this.bg_color={'background-color':'#F4F6FF'};
  }
  bg_accueil(){
    this.bg_color={'background-color':'white'};
  }
}
