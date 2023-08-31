import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';
// @ts-ignore
import vertexShader from '../shaders/vertex.glsl';
// @ts-ignore
import fragmentShader from '../shaders/fragment.glsl';
// @ts-ignore
import atmosphereVertexShader from '../shaders/atmosphereVertex.glsl';
// @ts-ignore
import atmoshpereFragmentShader from '../shaders/atmosphereFragment.glsl';
import gsap from 'gsap';
// import { GUI } from 'dat.gui';
import { extend } from 'angular-three';
import { OrbitControls } from 'three-stdlib';
import { TextAreaComponent } from '../../text-area/text-area.component';

extend({ OrbitControls });

@Component({
  selector: 'app-saturn',
  standalone: true,
  imports: [CommonModule, TextAreaComponent],
  templateUrl: './saturn.component.html',
  styleUrls: ['./saturn.component.css'],
})
export class SaturnComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') private canvasRef: ElementRef = new ElementRef('canvas');
  @ViewChild('canvasContainer') private canvasContainerRef: ElementRef =
    new ElementRef('canvasContainer');

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }
  private get canvasContainer(): HTMLElement {
    return this.canvasContainerRef.nativeElement;
  }

  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera();
  private renderer = new THREE.WebGLRenderer();
  private saturn = new THREE.Mesh();
  private atmosphere = new THREE.Mesh();

  private group = new THREE.Group();
  private starGeometry = new THREE.BufferGeometry();

  // private gui = new GUI();
  // private cameraFolder = this.gui.addFolder('Camera');

  mouseX = window.innerWidth / 2;
  mouseY = window.innerHeight / 2;
  // controls: any;

  ngOnInit(): void {
    // Add listener to the window, so we can resize the window and the camera
    let that = this;
    window.addEventListener('resize', function () {
      (that.camera.aspect =
        that.canvasContainer.offsetWidth / that.canvasContainer.offsetHeight),
        that.camera.updateProjectionMatrix();
      that.renderer.setSize(
        that.canvasContainer.offsetWidth,
        that.canvasContainer.offsetHeight
      );
    });

    // makes the saturn move on mouse move
    document.onmousemove = (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    };
  }

  ngAfterViewInit(): void {
    this.createScene();
    this.startRenderingLoop();
  }

  private createScene() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.canvasContainer.offsetWidth / this.canvasContainer.offsetHeight,
      0.1,
      1000
    );

    // add the saturn
    this.saturn = new THREE.Mesh(
      new THREE.SphereGeometry(5, 50, 50),
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          globeTexture: {
            value: new THREE.TextureLoader().load(
              'assets/planets/saturn/saturn_map.jpg'
            ),
          },
          transparent: {
            value: 1,
          },
        },
        // map: new THREE.TextureLoader().load(
        //   'assets/planets/saturn/saturn_daymap.jpg'
        // ),
      })
    );
    // this.scene.add(this.saturn);

    // add atmoshpere
    this.atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(5, 50, 50),
      new THREE.ShaderMaterial({
        vertexShader: atmosphereVertexShader,
        fragmentShader: atmoshpereFragmentShader,
        blending: THREE.AdditiveBlending,
        transparent: true,
        side: THREE.BackSide,
        uniforms: {
          rgb: { value: new THREE.Vector3(0.97, 0.71, 0.11) },
        },
      })
    );
    this.atmosphere.scale.set(1.2, 1.2, 1.2);
    this.scene.add(this.atmosphere);

    this.group.add(this.saturn);
    this.scene.add(this.group);

    // Background
    const starVerticies = [];
    for (let index = 0; index < 10000; index++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = -Math.random() * 2000;
      starVerticies.push(x, y, z);
    }
    this.starGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(starVerticies, 3)
    );

    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });
    const stars = new THREE.Points(this.starGeometry, starMaterial);
    this.scene.add(stars);

    this.camera.position.z = 15;

    // Camera GUI
    // this.cameraFolder.add(this.camera.position, 'x', -5, 5);
    // this.cameraFolder.add(this.camera.position, 'y', -5, 5);
    // this.cameraFolder.add(this.camera.position, 'z', 15, 100);
  }

  private startRenderingLoop() {
    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(
      this.canvasContainer.offsetWidth,
      this.canvasContainer.offsetHeight
    );
    // this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    let that = this;
    //   Start the 3D rendering
    (function render() {
      requestAnimationFrame(render);
      that.renderer.render(that.scene, that.camera);
      // HERE we can update the scene to add stuff like auto movement
      that.saturn.rotation.y += 0.002;

      gsap.to(that.group.rotation, {
        x: (that.mouseY / innerHeight) * 2 - 1,
        y: (that.mouseX / innerWidth) * 2 + 1,
        duration: 2,
      });
    })();
  }
}
