import { TestBed } from '@angular/core/testing';

import { CarNamesService } from './car-names.service';

describe('CarNamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarNamesService = TestBed.get(CarNamesService);
    expect(service).toBeTruthy();
  });
});
