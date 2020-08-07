import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Overlay } from '@angular/cdk/overlay';
import { of, Observable, throwError } from 'rxjs';

import { ISAApiService } from '@wesleyan-frontend/wpisa/data-access';
import { OverlayProgressSpinnerService } from '@wesleyan-frontend/shared/ui-progress-spinner';

import { KnowledgeCheckFacade } from './knowledge-check.facade';
import { AppStateFacade } from './app-state-facade';
import { HttpErrorResponse } from '@angular/common/http';

describe('KnowledgeCheckService', () => {
  let knowledgeCheckFacade: KnowledgeCheckFacade;
  let isaApiService: ISAApiService;
  let appStateFacade: AppStateFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        OverlayProgressSpinnerService,
        Overlay,
        ISAApiService,
        {
          provide: AppStateFacade,
          useValue: { save: jest.fn(), state: {} },
        },
      ],
    });
    knowledgeCheckFacade = TestBed.inject(KnowledgeCheckFacade);
    isaApiService = TestBed.inject(ISAApiService);
    appStateFacade = TestBed.inject(AppStateFacade);
  });

  it('should be created', () => {
    expect(knowledgeCheckFacade).toBeTruthy();
  });

  describe('submitQuestion1', () => {
    it('should reset question 2 answer', () => {
      const kcAnswers = {
        forms: {
          knowledgeCheckQ1: { question1: 'Yes' },
          knowledgeCheckQ2: { question2: null },
        },
      };
      jest.spyOn(appStateFacade, 'save').mockReturnValue(of({}));

      knowledgeCheckFacade
        .submitQuestion1('Yes', 'Yes I agree...', 'blah')
        .subscribe((res) => {
          expect(appStateFacade.save).toHaveBeenCalledWith(kcAnswers);
        });
    });

    it('should submit question 1 index as 1, question text, answer value, answer label', () => {
      jest.spyOn(appStateFacade, 'save').mockReturnValue(of({}));

      knowledgeCheckFacade
        .submitQuestion1('Yes', 'Yes I agree...', 'blah')
        .subscribe((res) => {
          expect(isaApiService.submitInitialAnswer).toHaveBeenCalledWith({
            questionIndex: 1,
            questionText: 'blah',
            answerText: 'Yes I agree...',
            answerValue: 'Yes',
          });
        });
    });

    it('should save attemptId if question submitted successful', () => {
      jest.spyOn(appStateFacade, 'save').mockReturnValue(of({}));
      jest
        .spyOn(isaApiService, 'submitInitialAnswer')
        .mockReturnValue(of({ data: { attemptId: 123 } }));

      knowledgeCheckFacade
        .submitQuestion1('Yes', 'Yes I agree...', 'blah')
        .subscribe((res) => {
          expect(knowledgeCheckFacade.knowledgeCheckAttemptId).toEqual(123);
        });
    });

    it('should redirect to knowledge check failure page if answer no', () => {
      jest.spyOn(appStateFacade, 'save').mockReturnValue(of({}));
      jest
        .spyOn(isaApiService, 'submitInitialAnswer')
        .mockImplementation(() =>
          throwError(new HttpErrorResponse({ status: 400 }))
        );
      spyOn(window, 'open').and.callFake(() => jest.fn());
      knowledgeCheckFacade
        .submitQuestion1('Yes', 'Yes I agree...', 'blah')
        .subscribe((res) => {});
      expect(window.open).toHaveBeenCalledWith(
        '/savings-and-investments/with-profits-isa/check-cannot-proceed',
        '_self'
      );
    });
  });
});
