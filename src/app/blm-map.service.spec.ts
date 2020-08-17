import { TestBed } from '@angular/core/testing';

import { BlmMapService } from './blm-map.service';

describe('BlmMapService', () => {
  let service: BlmMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlmMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
