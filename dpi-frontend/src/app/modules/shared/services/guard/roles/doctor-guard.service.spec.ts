import { TestBed } from '@angular/core/testing';

import { DoctorGuardService } from './doctor-guard.service';

describe('DoctorGuardService', () => {
  let service: DoctorGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
