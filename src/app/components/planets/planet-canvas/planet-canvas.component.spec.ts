import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetCanvasComponent } from './planet-canvas.component';

describe('PlanetCanvasComponent', () => {
  let component: PlanetCanvasComponent;
  let fixture: ComponentFixture<PlanetCanvasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PlanetCanvasComponent]
    });
    fixture = TestBed.createComponent(PlanetCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
