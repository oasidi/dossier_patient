import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilInformationComponent } from './civil-information.component';

describe('CivilInformationComponent', () => {
  let component: CivilInformationComponent;
  let fixture: ComponentFixture<CivilInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivilInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
