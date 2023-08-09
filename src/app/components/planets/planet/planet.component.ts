import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { extend, NgtBeforeRenderEvent } from 'angular-three';
import * as THREE from 'three';

extend(THREE);
@Component({
  selector: 'app-planet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PlanetComponent {
  active = false;
  hovered = false;
  @Input() position = [0, 0, 0];
  @Input() rotationX: number = 0;
  @Input() rotationY: number = 0;

  onBeforeRender(event: NgtBeforeRenderEvent<THREE.Mesh>) {
    event.object.rotation.x += this.rotationX;
    event.object.rotation.y += this.rotationY;
  }
}
