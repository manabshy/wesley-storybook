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

import {
  ConfigService,
  FindFCApiService,
  NewCustomerPostcodeContent,
} from '@wesleyan-frontend/find-my-fc/data-access';

import { AppForms } from '../../shared/app-forms.interface';
import { SegmentType } from '../../shared/segment-type.interface';
import { ProfessionFacade } from './profession.facade';
import { CustomerFacade } from './customer.facade';

@Injectable({
  providedIn: 'root',
})
export class PostcodeFacade {
  content: NewCustomerPostcodeContent;
  postcodePageContent$: Observable<{ title: string; description: string }>;

  constructor(
    private configService: ConfigService,
    private formManager: NgFormsManager<AppForms>,
    private professionFacade: ProfessionFacade,
    private customerFacade: CustomerFacade
  ) {
    this.content = this.configService.content.newCustomerPostcode;

    this.postcodePageContent$ = this.professionFacade.customerProfessionSegment$.pipe(
      map((type) => {
        const title =
          type === SegmentType.SEGMENT_BY_HOME
            ? this.content.homePostcodeHeading
            : this.content.workPostcodeHeading;
        const description =
          type === SegmentType.SEGMENT_BY_HOME
            ? this.content.homePostcode.inputLabel
            : this.content.workPostcode.inputLabel;

        return {
          title,
          description,
        };
      })
    );
  }

  findFC(postcode: string) {
    const profession = this.formManager.getControl('professionSelect', 'sector')
      .value;

    this.customerFacade.findFCByPostcodeAndSegment(postcode, profession);
  }
}
