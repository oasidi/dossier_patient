import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalCaseSettingComponent } from './medical-case-setting.component';

describe('MedicalCaseSettingComponent', () => {
  let component: MedicalCaseSettingComponent;
  let fixture: ComponentFixture<MedicalCaseSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalCaseSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalCaseSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
