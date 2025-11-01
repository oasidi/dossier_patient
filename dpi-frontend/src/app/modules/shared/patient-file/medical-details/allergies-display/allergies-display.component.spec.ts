import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergiesDisplayComponent } from './allergies-display.component';

describe('AllergiesDisplayComponent', () => {
  let component: AllergiesDisplayComponent;
  let fixture: ComponentFixture<AllergiesDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllergiesDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergiesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
