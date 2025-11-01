import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAppointmentsDisplayComponent } from './medical-appointments-display.component';

describe('MedicalAppointmentsDisplayComponent', () => {
  let component: MedicalAppointmentsDisplayComponent;
  let fixture: ComponentFixture<MedicalAppointmentsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalAppointmentsDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalAppointmentsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
