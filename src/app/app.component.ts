// import {
//   Component,
//   CUSTOM_ELEMENTS_SCHEMA,
//   inject,
//   Input,
// } from '@angular/core';
// import {
//   NgtCanvas,
//   extend,
//   NgtBeforeRenderEvent,
//   NgtStore,
//   NgtArgs,
// } from 'angular-three';
// import { OrbitControls } from 'three-stdlib';
// import * as THREE from 'three';

// extend(THREE);
// extend({ OrbitControls });
// @Component({
//   selector: 'demo-cube',
//   standalone: true,
//   template: `
//     <ngt-mesh
//       (beforeRender)="onBeforeRender($any($event))"
//       (click)="active = !active"
//       (pointerover)="hovered = true"
//       (pointerout)="hovered = false"
//       [scale]="active ? 1.5 : 1"
//       [position]="position"
//     >
//       <ngt-box-geometry />
//       <ngt-mesh-standard-material [color]="hovered ? 'darkred' : 'red'" />
//     </ngt-mesh>
//   `,
//   schemas: [CUSTOM_ELEMENTS_SCHEMA],
// })
// export class Cube {
//   active = false;
//   hovered = false;
//   @Input() position = [0, 0, 0];

//   onBeforeRender(event: NgtBeforeRenderEvent<THREE.Mesh>) {
//     event.object.rotation.x += 0.01;
//   }
// }

// @Component({
//   standalone: true,
//   template: `
//     <ngt-ambient-light [intensity]="0.5" />
//     <ngt-spot-light [position]="10" [angle]="0.15" [penumbra]="1" />
//     <ngt-point-light [position]="-10" />

//     <demo-cube [position]="[1.5, 0, 0]" />
//     <demo-cube [position]="[-1.5, 0, 0]" />

//     <ngt-orbit-controls *args="[camera, glDom]" [enableDamping]="true" />
//   `,
//   imports: [Cube, NgtArgs],
//   schemas: [CUSTOM_ELEMENTS_SCHEMA],
// })
// export class SceneGraph {
//   private readonly store = inject(NgtStore);
//   readonly camera = this.store.get('camera');
//   readonly glDom = this.store.get('gl', 'domElement');

//   onBeforeRender(event: NgtBeforeRenderEvent<THREE.Mesh>) {
//     event.object.rotation.x += 0.01;
//   }
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // standalone: true,
  // template: `<ngt-canvas [sceneGraph]="SceneGraph" />`,
  // imports: [NgtCanvas],
})
export class AppComponent {
  title = 'threejs';
  // readonly SceneGraph = SceneGraph;
}
