import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstantsSettingComponent } from './constants-setting.component';

describe('ConstantsComponent', () => {
  let component: ConstantsSettingComponent;
  let fixture: ComponentFixture<ConstantsSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstantsSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstantsSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
