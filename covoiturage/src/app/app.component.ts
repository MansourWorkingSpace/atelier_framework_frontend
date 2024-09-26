import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';//import forms module

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],//import forms module
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'covoiturage';
}