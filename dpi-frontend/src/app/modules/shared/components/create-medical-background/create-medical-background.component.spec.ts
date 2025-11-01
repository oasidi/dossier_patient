import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMedicalBackgroundComponent } from './create-medical-background.component';

describe('CreateMedicalBackgroundComponent', () => {
  let component: CreateMedicalBackgroundComponent;
  let fixture: ComponentFixture<CreateMedicalBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMedicalBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMedicalBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
