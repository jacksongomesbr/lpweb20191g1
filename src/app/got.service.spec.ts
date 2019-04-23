import { TestBed } from '@angular/core/testing';

import { GOTService } from './got.service';

describe('GOTService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GOTService = TestBed.get(GOTService);
    expect(service).toBeTruthy();
  });
});
