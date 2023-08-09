import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvasComponent } from './components/canvas/canvas.component';
import { PlanetCanvasComponent } from './components/planets/planet-canvas/planet-canvas.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'demo' },
  { path: 'demo', component: CanvasComponent },
  { path: 'planets', component: PlanetCanvasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
