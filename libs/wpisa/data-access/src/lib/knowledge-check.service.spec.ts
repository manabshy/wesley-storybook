import { TestBed } from '@angular/core/testing';

import { KnowledgeCheckService } from './knowledge-check.service';

describe('KnowledgeCheckService', () => {
  let service: KnowledgeCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnowledgeCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
