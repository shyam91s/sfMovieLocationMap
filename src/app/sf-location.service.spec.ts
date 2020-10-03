import { TestBed } from '@angular/core/testing';

import { SfLocationService } from './sf-location.service';

describe('SfLocationService', () => {
  let service: SfLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SfLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
