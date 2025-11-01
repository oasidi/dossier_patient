import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalBackgroundsDisplayComponent } from './medical-backgrounds-display.component';

describe('MedicalBackgroundsDisplayComponent', () => {
  let component: MedicalBackgroundsDisplayComponent;
  let fixture: ComponentFixture<MedicalBackgroundsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalBackgroundsDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalBackgroundsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
