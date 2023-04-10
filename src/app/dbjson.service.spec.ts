import { TestBed } from '@angular/core/testing';

import { DbjsonService } from './dbjson.service';

describe('DbjsonService', () => {
  let service: DbjsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbjsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
