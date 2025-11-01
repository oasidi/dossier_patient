import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageryPrescriptionComponent } from './imagery-prescription.component';

describe('ImageryPrescriptionComponent', () => {
  let component: ImageryPrescriptionComponent;
  let fixture: ComponentFixture<ImageryPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageryPrescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageryPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
