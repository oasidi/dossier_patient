import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstantsDisplayComponent } from './constants-display.component';

describe('ConstantsDisplayComponent', () => {
  let component: ConstantsDisplayComponent;
  let fixture: ComponentFixture<ConstantsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstantsDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstantsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
