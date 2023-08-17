import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GLTFLoader, OrbitControls } from 'three-stdlib';
import * as THREE from 'three';
import { extend } from 'angular-three';
import { GUI } from 'dat.gui';

extend(THREE);
extend({ OrbitControls });
@Component({
  selector: 'app-model-import',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './model-import.component.html',
  styleUrls: ['./model-import.component.css'],
})
export class ModelImportComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') private canvasRef: ElementRef = new ElementRef('canvas');

  private camera!: THREE.PerspectiveCamera;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }
  private loader = new GLTFLoader();
  private renderer!: THREE.WebGLRenderer;
  // private scene!: THREE.Scene
  private gui = new GUI();
  private objectFolder = this.gui.addFolder('Object');
  private cameraFolder = this.gui.addFolder('Camera');
  private o = {
    objectToRender: 'dino',
  };

  // Scene
  private scene = new THREE.Scene();
  // private camera = new THREE.PerspectiveCamera(
  //   75,
  //   window.innerWidth / window.innerHeight,
  //   0.1,
  //   1000
  // );
  // private renderer = new THREE.WebGLRenderer({ alpha: true }); // Alpha allows for transparents background
  // lights
  private topLight: THREE.AmbientLight = new THREE.AmbientLight();
  private ambientLight: THREE.AmbientLight = new THREE.AmbientLight();

  object: any;
  controls: any;
  objectToRender: any = 'dino';
  mouseX = window.innerWidth / 2;
  mouseY = window.innerHeight / 2;

  // loader: GLTFLoader = new GLTFLoader();

  ngOnInit(): void {
    // Add listener to the window, so we can resize the window and the camera
    let that = this;
    window.addEventListener('resize', function () {
      that.camera.aspect = this.window.innerWidth / this.window.innerHeight;
      that.camera.updateProjectionMatrix();
      that.renderer.setSize(window.innerWidth, window.innerHeight);
    });
    // makes the eye move on mouse move
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
    // GUI initialize
    this.gui.removeFolder(this.objectFolder);
    this.objectFolder = this.gui.addFolder('Object');
    this.gui.removeFolder(this.cameraFolder);
    this.cameraFolder = this.gui.addFolder('Camera');

    const options = ['eye', 'dino'];
    this.objectFolder
      .add(this.o, 'objectToRender', options)
      .onChange((value) => {
        this.objectToRender = value;
        this.createScene();
      });

    // document
    //   .getElementById('container3D')
    //   ?.appendChild(this.renderer.domElement);

    // set how far camera will be from model
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x00000);
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = this.objectToRender === 'dino' ? 25 : 500;

    // Camera GUI
    this.cameraFolder.add(this.camera.position, 'x', -20, 20);
    this.cameraFolder.add(this.camera.position, 'y', -20, 20);
    this.cameraFolder.add(this.camera.position, 'z', 0, 250);

    this.topLight = new THREE.AmbientLight(
      0x333333,
      this.objectToRender === 'dino' ? 5 : 1
    ); // color and intensity
    this.topLight.position.set(500, 500, 500);
    this.topLight.castShadow = true;
    this.scene.add(this.topLight);

    this.ambientLight = new THREE.AmbientLight(
      0x333333,
      this.objectToRender === 'dino' ? 5 : 1
    );
    this.scene.add(this.ambientLight);

    // load the file
    let that = this;
    this.loader.load(
      `assets/models/${this.objectToRender}/scene.gltf`,
      function (gltf: any) {
        that.object = gltf.scene;
        that.scene.add(that.object);
        that.objectFolder.add(that.object.rotation, 'x', 0, Math.PI * 2);
        that.objectFolder.add(that.object.rotation, 'y', 0, Math.PI * 2);
        that.objectFolder.add(that.object.rotation, 'z', 0, Math.PI * 2);
      },
      function (xhr: any) {
        // while loading log the progress
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded.');
      },
      function (error: any) {
        // If error log it
        console.log(error);
      }
    );
  }

  private startRenderingLoop() {
    // Renderer
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    if (this.objectToRender === 'dino') {
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    }

    let that = this;
    //   Start the 3D rendering
    (function render() {
      requestAnimationFrame(render);
      that.renderer.render(that.scene, that.camera);
      // HERE we can update the scene to add stuff like auto movement
      if (that.object && that.objectToRender === 'eye') {
        that.object.rotation.y = -3 + (that.mouseX / window.innerWidth) * 3;
        that.object.rotation.x =
          -1.2 + (that.mouseY * 2.5) / window.innerHeight;
      }
    })();
  }
}
