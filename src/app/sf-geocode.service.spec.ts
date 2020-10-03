import { TestBed } from '@angular/core/testing';

import { SfGeocodeService } from './sf-geocode.service';

describe('SfGeocodeService', () => {
  let service: SfGeocodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SfGeocodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
