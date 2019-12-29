import { TestBed } from '@angular/core/testing';

import { CocApiService } from './coc-api.service';

describe('CocApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CocApiService = TestBed.get(CocApiService);
    expect(service).toBeTruthy();
  });
});
