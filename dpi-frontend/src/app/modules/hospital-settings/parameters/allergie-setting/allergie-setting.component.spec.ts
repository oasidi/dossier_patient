import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergieSettingComponent } from './allergie-setting.component';

describe('AllergieSettingComponent', () => {
  let component: AllergieSettingComponent;
  let fixture: ComponentFixture<AllergieSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllergieSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergieSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
