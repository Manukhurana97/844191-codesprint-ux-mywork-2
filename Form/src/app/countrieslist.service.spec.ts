import { TestBed } from '@angular/core/testing';

import { CountrieslistService } from './countrieslist.service';

describe('CountrieslistService', () => {
  let service: CountrieslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountrieslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
