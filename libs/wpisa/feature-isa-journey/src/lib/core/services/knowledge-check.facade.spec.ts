import { TestBed } from '@angular/core/testing';

import { KnowledgeCheckFacade } from './knowledge-check.facade';

describe('KnowledgeCheckService', () => {
  let service: KnowledgeCheckFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnowledgeCheckFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
