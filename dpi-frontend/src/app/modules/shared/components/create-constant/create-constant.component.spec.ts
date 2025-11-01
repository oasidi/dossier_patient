import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConstantComponent } from './create-constant.component';

describe('CreateConstantComponent', () => {
  let component: CreateConstantComponent;
  let fixture: ComponentFixture<CreateConstantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateConstantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateConstantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
