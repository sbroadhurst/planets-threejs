import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelImportComponent } from './model-import.component';

describe('ModelImportComponent', () => {
  let component: ModelImportComponent;
  let fixture: ComponentFixture<ModelImportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ModelImportComponent]
    });
    fixture = TestBed.createComponent(ModelImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
