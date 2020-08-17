import { TestBed } from '@angular/core/testing';

import { BlmEmailService } from './blm-email.service';

describe('BlmEmailService', () => {
  let service: BlmEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlmEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
