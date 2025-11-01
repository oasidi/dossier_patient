import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryPrescriptionComponent } from './laboratory-prescription.component';

describe('LaboratoryPrescriptionComponent', () => {
  let component: LaboratoryPrescriptionComponent;
  let fixture: ComponentFixture<LaboratoryPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboratoryPrescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoryPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
