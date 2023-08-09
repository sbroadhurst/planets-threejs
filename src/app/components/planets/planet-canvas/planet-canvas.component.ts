import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgtArgs, NgtCanvas, NgtStore, extend } from 'angular-three';
import { OrbitControls } from 'three-stdlib';
import * as THREE from 'three';
import { PlanetComponent } from '../planet/planet.component';

extend(THREE);
extend({ OrbitControls });
@Component({
  standalone: true,
  template: `
    <ngt-ambient-light [intensity]="0.5" />
    <ngt-spot-light [position]="10" [angle]="0.15" [penumbra]="1" />
    <ngt-point-light [position]="-10" />

    <app-planet></app-planet>

    <ngt-orbit-controls *args="[camera, glDom]" [enableDamping]="true" />
  `,
  imports: [PlanetComponent, CommonModule, NgtArgs],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrls: ['./planet-canvas.component.css'],
})
export class PlanetSceneGraph {
  private readonly store = inject(NgtStore);
  readonly camera = this.store.get('camera');
  readonly glDom = this.store.get('gl', 'domElement');
}

@Component({
  selector: 'app-planet-canvas',
  standalone: true,
  imports: [CommonModule, NgtCanvas],
  templateUrl: './planet-canvas.component.html',
  styleUrls: ['./planet-canvas.component.css'],
})
export class PlanetCanvasComponent {
  readonly SceneGraph = PlanetSceneGraph;
}
