import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AppForms } from '../models/app-forms.interface';
import {
  SessionStorageService,
  CurrentTaxPeriodISALimits,
} from '@wesleyan-frontend/wpisa/data-access';
import { mergeDeepRight, reduce, omit, find, propEq } from 'ramda';
import { NgFormsManager } from '@ngneat/forms-manager';
import { AppState } from '../models/app-state.interface';

@Injectable({
  providedIn: 'root',
})
export class AppStateFacade {
  private appState: AppState;

  constructor(
    private sessionStorageService: SessionStorageService,
    private formManager: NgFormsManager<AppForms>
  ) {
    this.appState = JSON.parse(this.sessionStorageService.getState());
  }

  save(state: Partial<AppState>): Observable<{}> {
    this.appState = mergeDeepRight(this.appState, state);

    return this.sessionStorageService.save(JSON.stringify(this.appState));
  }

  saveFormState(
    formName: keyof AppForms | Array<keyof AppForms>,
    omitValues?: { formName: keyof AppForms; controlName: string[] }[]
  ) {
    const listOfControls = Array.isArray(formName) ? formName : [formName];

    const formStateObj: Partial<AppForms> = this.processObject(
      omitValues,
      listOfControls
    );

    return this.save({
      forms: {
        ...formStateObj,
      },
    });
  }

  private processObject(
    omitValues: { formName: keyof AppForms; controlName: string[] }[],
    listOfControls: Array<keyof AppForms>
  ): Partial<AppForms> {
    return reduce(
      (acc: Partial<AppForms>, formKey: keyof AppForms) => {
        const formValue = this.formManager.getControl(formKey).value;
        const valuesToOmit = omitValues
          ? find(propEq('formName', formKey))(omitValues)
          : undefined;

        return {
          ...acc,
          [formKey]: valuesToOmit
            ? omit(valuesToOmit.controlName, formValue)
            : formValue,
        };
      },
      {},
      listOfControls
    );
  }

  get state() {
    return this.appState;
  }
}
