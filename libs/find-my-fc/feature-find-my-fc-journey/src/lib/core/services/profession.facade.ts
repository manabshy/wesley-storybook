import { NgFormsManager } from '@ngneat/forms-manager';
import { Injectable, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { ConfigService } from '@wesleyan-frontend/find-my-fc/data-access';

import { AppForms } from '../../shared/app-forms.interface';
import { SegmentType } from '../../shared/segment-type.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfessionFacade {
  content;
  customerProfessionSegment$: Observable<SegmentType>;
  workProfessionSectorList = ['Teacher', 'Dentist'];
  homeProfessionSectorList = ['GP', 'HospitalDoctor', 'Lawyer', 'Undefined'];

  constructor(
    private configService: ConfigService,
    private formManager: NgFormsManager<AppForms>
  ) {
    this.content = this.configService.content;

    this.customerProfessionSegment$ = this.formManager
      .valueChanges('professionSelect')
      .pipe(
        map((value) =>
          this.workProfessionSectorList.includes(value.sector)
            ? SegmentType.SEGMENT_BY_WORK
            : SegmentType.SEGMENT_BY_HOME
        )
      );
  }
}
