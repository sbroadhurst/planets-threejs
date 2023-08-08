import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCubeComponent } from './demo-cube.component';

describe('DemoCubeComponent', () => {
  let component: DemoCubeComponent;
  let fixture: ComponentFixture<DemoCubeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DemoCubeComponent]
    });
    fixture = TestBed.createComponent(DemoCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
