import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestDirectivesComponent } from './test-directives/test-directives.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TestDirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstapp';
}
