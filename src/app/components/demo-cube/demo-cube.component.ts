import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, inject, Input } from '@angular/core';
import { extend, NgtBeforeRenderEvent } from 'angular-three';
import * as THREE from 'three';

extend(THREE);
@Component({
  selector: 'app-demo-cube',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo-cube.component.html',
  styleUrls: ['./demo-cube.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DemoCubeComponent {
  active = false;
  hovered = false;
  @Input() position = [0, 0, 0];

  onBeforeRender(event: NgtBeforeRenderEvent<THREE.Mesh>) {
    event.object.rotation.x += 0.01;
  }
}
