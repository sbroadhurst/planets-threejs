import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenusComponent } from './venus.component';

describe('VenusComponent', () => {
  let component: VenusComponent;
  let fixture: ComponentFixture<VenusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [VenusComponent]
    });
    fixture = TestBed.createComponent(VenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
