import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FeatureComponent } from "./feature/feature.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FeatureComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lazyloading';
}
