import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Overlay } from '@angular/cdk/overlay';

import { ISAApiService } from '@wesleyan-frontend/wpisa/data-access';
import { OverlayProgressSpinnerService } from '@wesleyan-frontend/shared/ui-progress-spinner';

import { KnowledgeCheckFacade } from './knowledge-check.facade';
import { AppStateFacade } from './app-state-facade';

describe('KnowledgeCheckService', () => {
  let service: KnowledgeCheckFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AppStateFacade,
        OverlayProgressSpinnerService,
        Overlay,
        ISAApiService,
      ],
    });
    service = TestBed.inject(KnowledgeCheckFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
