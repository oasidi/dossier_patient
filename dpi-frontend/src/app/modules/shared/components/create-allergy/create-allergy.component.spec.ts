import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAllergyComponent } from './create-allergy.component';

describe('CreateAllergyComponent', () => {
  let component: CreateAllergyComponent;
  let fixture: ComponentFixture<CreateAllergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAllergyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAllergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
