import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InscriptionComponent } from '../inscription/inscription.component';
import { ConnexionComponent } from '../connexion/connexion.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,NgStyle],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
}
