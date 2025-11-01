import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalCasesDisplayComponent } from './medical-cases-display.component';

describe('MedicalCasesDisplayComponent', () => {
  let component: MedicalCasesDisplayComponent;
  let fixture: ComponentFixture<MedicalCasesDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalCasesDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalCasesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
