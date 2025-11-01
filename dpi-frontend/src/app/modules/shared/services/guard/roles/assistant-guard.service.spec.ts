import { TestBed } from '@angular/core/testing';

import { AssistantGuardService } from './assistant-guard.service';

describe('AssistantGuardService', () => {
  let service: AssistantGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssistantGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
