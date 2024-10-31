import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgControl, NgModel } from '@angular/forms';
import { NavbarComponent } from "./navbar/navbar.component";
import { ConnexionComponent } from "./connexion/connexion.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,NgIf, NavbarComponent, ConnexionComponent],
  exportAs: 'appRoot',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'Way2go';
}
