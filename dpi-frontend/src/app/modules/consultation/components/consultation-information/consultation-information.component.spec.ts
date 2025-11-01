import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationInformationComponent } from './consultation-information.component';

describe('ConsultationInformationComponent', () => {
  let component: ConsultationInformationComponent;
  let fixture: ComponentFixture<ConsultationInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
