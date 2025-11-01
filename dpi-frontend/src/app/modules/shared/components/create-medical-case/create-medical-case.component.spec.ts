import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMedicalCaseComponent } from './create-medical-case.component';

describe('CreateMedicalCaseComponent', () => {
  let component: CreateMedicalCaseComponent;
  let fixture: ComponentFixture<CreateMedicalCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMedicalCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMedicalCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
