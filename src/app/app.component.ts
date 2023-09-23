import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'threejs';
  constructor(private router: Router) {}

  selectNewPlanet(id: string): void {
    this.router.navigate([`planets/${id}`]);
  }

  selectImports(): void {
    this.router.navigate([`imports`]);
  }
}
