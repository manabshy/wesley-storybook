import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NgFormsManager } from '@ngneat/forms-manager';
import { Subscription } from 'rxjs';

import { DirectDebitDetails } from '@wesleyan-frontend/wpisa/data-access';

import { OnSubmitOrHasValueErrorStateMatcher } from '../../core/error-state-matcher';
import { AppForms } from '../../core/models/app-forms.interface';

@Component({
  selector: 'wes-direct-debit-form',
  templateUrl: './direct-debit-form.component.html',
  styleUrls: ['./direct-debit-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DirectDebitFormComponent implements OnInit, OnDestroy, OnChanges {
  @Input() submitAttempt = false;
  @Input() content: DirectDebitDetails;

  errorStateMatcher = new OnSubmitOrHasValueErrorStateMatcher();
  private subscription = new Subscription();

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formsManager: NgFormsManager<AppForms>
  ) {}

  ngOnInit(): void {}

  createGroup() {
    this.form = this.fb.group(
      {
        accountHolderFullName: [
          null,
          [Validators.required, Validators.maxLength(100)],
        ],
        sortCode: this.fb.group({
          c1: [
            null,
            [
              Validators.required,
              Validators.pattern('[0-9]*'),
              Validators.minLength(2),
              Validators.maxLength(2),
            ],
          ],
          c2: [
            null,
            [
              Validators.required,
              Validators.pattern('[0-9]*'),
              Validators.minLength(2),
              Validators.maxLength(2),
            ],
          ],
          c3: [
            null,
            [
              Validators.required,
              Validators.pattern('[0-9]*'),
              Validators.minLength(2),
              Validators.maxLength(2),
            ],
          ],
        }),
        accountNumber: [
          null,
          [
            Validators.required,
            Validators.pattern('[0-9]*'),
            Validators.minLength(6),
            Validators.maxLength(8),
          ],
        ],
        bankName: [null, [Validators.required, Validators.maxLength(100)]],
      },
      { updateOn: 'blur' }
    );
    this.formsManager.upsert('directDebit', this.form);

    return this.form;
  }

  isFieldInvalid(fieldName: string) {
    return (
      this.form.get(fieldName).invalid &&
      (this.form.get(fieldName).dirty || this.submitAttempt)
    );
  }

  showSortCodeError() {
    return (
      (this.form.get('sortCode.c1').dirty &&
        this.form.get('sortCode.c2').dirty &&
        this.form.get('sortCode.c3').dirty) ||
      this.submitAttempt
    );
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['touched'] && simpleChanges['touched'].currentValue) {
      this.form.markAllAsTouched();
    }
    if (
      simpleChanges['submitAttempt'] &&
      simpleChanges['submitAttempt'].currentValue
    ) {
      this.errorStateMatcher.submitted = true;
    }
  }

  ngOnDestroy() {
    this.formsManager.unsubscribe('directDebit');
    this.subscription.unsubscribe();
  }
}
