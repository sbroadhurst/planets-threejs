import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvasComponent } from './components/canvas/canvas.component';
import { PlanetCanvasComponent } from './components/planets/planet-canvas/planet-canvas.component';
import { ModelImportComponent } from './components/model-import/model-import.component';
import { EarthComponent } from './components/planets/earth/earth.component';
import { SaturnComponent } from './components/planets/saturn/saturn.component';
import { VenusComponent } from './components/planets/venus/venus.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'demo' },
  { path: 'demo', component: CanvasComponent },
  // { path: 'planets', component: PlanetCanvasComponent },
  { path: 'import', component: ModelImportComponent },
  { path: 'planets/:id', component: VenusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
