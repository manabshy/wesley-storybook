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

@Injectable({
  providedIn: 'root',
})
export class CustomerDetailsFacade {
  constructor(
    private configService: ConfigService,
    private formManager: NgFormsManager<AppForms>,
    private professionFacade: ProfessionFacade,
    private findFinancialConsultantService: FindFCApiService
  ) {}

  findFC(dateOfBirth: string, emailAddress: string, postcode: string) {
    this.findFinancialConsultantService
      .findByCustomerDetails(dateOfBirth, emailAddress, postcode)
      .subscribe();
  }
}
