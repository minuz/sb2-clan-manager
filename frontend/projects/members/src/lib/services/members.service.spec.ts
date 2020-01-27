import { TestBed } from '@angular/core/testing';

import { CocApiService } from './members.service';

describe('CocApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CocApiService = TestBed.get(CocApiService);
    expect(service).toBeTruthy();
  });
});
