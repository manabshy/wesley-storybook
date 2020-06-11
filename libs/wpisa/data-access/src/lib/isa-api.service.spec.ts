import { TestBed } from '@angular/core/testing';

import { ISAApiService } from './isa-api.service';

describe('KnowledgeCheckService', () => {
  let service: ISAApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ISAApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
