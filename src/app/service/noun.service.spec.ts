import { TestBed } from '@angular/core/testing';

import { NounService } from './noun.service';

describe('NounService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NounService = TestBed.get(NounService);
    expect(service).toBeTruthy();
  });
});
