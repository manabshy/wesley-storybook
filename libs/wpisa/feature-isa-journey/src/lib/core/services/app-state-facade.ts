import { Injectable } from '@angular/core';
import { mergeDeepRight, reduce, omit, find, propEq } from 'ramda';
import { NgFormsManager } from '@ngneat/forms-manager';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { SessionStorageService } from '@wesleyan-frontend/wpisa/data-access';

import { AppForms } from '../models/app-forms.interface';
import { AppState } from '../models/app-state.interface';

@Injectable({
  providedIn: 'root',
})
export class AppStateFacade {
  private appState: AppState;
  state$ = this.sessionStorageService.appState$.pipe(
    map((state) => JSON.parse(state))
  );

  constructor(
    private sessionStorageService: SessionStorageService,
    private formManager: NgFormsManager<AppForms>
  ) {
    this.state$.subscribe((s) => (this.appState = s));
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
        const formValue = this.formManager.getControl(formKey)?.value;
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
