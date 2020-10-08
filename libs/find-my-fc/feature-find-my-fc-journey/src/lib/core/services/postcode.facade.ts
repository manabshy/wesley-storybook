import { NgFormsManager } from '@ngneat/forms-manager';
import { Injectable, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest, throwError } from 'rxjs';
import {
  map,
  filter,
  tap,
  take,
  startWith,
  catchError,
  concatMap,
  finalize,
  shareReplay,
} from 'rxjs/operators';

import { ConfigService } from '@wesleyan-frontend/find-my-fc/data-access';

import { AppForms } from '../../shared/app-forms.interface';
import { CustomerType } from '../../shared/customer-type.interface';
import { SegmentType } from '../../shared/segment-type.interface';
import { ProfessionFacade } from './profession.facade';

@Injectable({
  providedIn: 'root',
})
export class PostcodeFacade {
  content;
  postcodePageContent$: Observable<{ title: string; description: string }>;

  constructor(
    private configService: ConfigService,
    private formManager: NgFormsManager<AppForms>,
    private professionFacade: ProfessionFacade
  ) {
    this.content = this.configService.content;

    this.postcodePageContent$ = this.professionFacade.customerProfessionSegment$.pipe(
      map((type) => {
        const title =
          type === SegmentType.SEGMENT_BY_HOME
            ? 'Home postcode'
            : 'Work postcode';
        const description =
          type === SegmentType.SEGMENT_BY_WORK
            ? 'Work postcode'
            : 'Home postcode';

        return {
          title,
          description,
        };
      })
    );
  }
}
