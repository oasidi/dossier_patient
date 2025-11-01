import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalBackgroundSettingComponent } from './medical-background-setting.component';

describe('MedicalBackgroundSettingComponent', () => {
  let component: MedicalBackgroundSettingComponent;
  let fixture: ComponentFixture<MedicalBackgroundSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalBackgroundSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalBackgroundSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
