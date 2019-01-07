import { TestBed } from '@angular/core/testing';

import { ApiGeocodService } from './api-geocod.service';

describe('ApiGeocodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiGeocodService = TestBed.get(ApiGeocodService);
    expect(service).toBeTruthy();
  });
});
