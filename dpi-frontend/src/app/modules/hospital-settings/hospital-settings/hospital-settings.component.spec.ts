import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalSettingsComponent } from './hospital-settings.component';

describe('HospitalSettingsComponent', () => {
  let component: HospitalSettingsComponent;
  let fixture: ComponentFixture<HospitalSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
