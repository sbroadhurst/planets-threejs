import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgtArgs,
  NgtBeforeRenderEvent,
  NgtCanvas,
  NgtStore,
  extend,
} from 'angular-three';
import { OrbitControls } from 'three-stdlib';
import * as THREE from 'three';
import { DemoCubeComponent } from '../demo-cube/demo-cube.component';

extend(THREE);
extend({ OrbitControls });
@Component({
  standalone: true,
  template: `
    <ngt-ambient-light [intensity]="0.5" />
    <ngt-spot-light [position]="10" [angle]="0.15" [penumbra]="1" />
    <ngt-point-light [position]="-10" />

    <app-demo-cube [position]="[1.5, 0, 0]" />
    <app-demo-cube [position]="[-1.5, 0, 0]" />

    <ngt-orbit-controls *args="[camera, glDom]" [enableDamping]="true" />
  `,
  imports: [DemoCubeComponent, NgtArgs],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SceneGraph {
  private readonly store = inject(NgtStore);
  readonly camera = this.store.get('camera');
  readonly glDom = this.store.get('gl', 'domElement');

  onBeforeRender(event: NgtBeforeRenderEvent<THREE.Mesh>) {
    event.object.rotation.x += 0.01;
  }
}

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [CommonModule, NgtCanvas],
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
})
export class CanvasComponent {
  readonly SceneGraph = SceneGraph;
}
