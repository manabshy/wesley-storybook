import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {
  LumpSumPayment,
  DirectDebitDetails,
} from '@wesleyan-frontend/wpisa/data-access';
import { NgFormsManager } from '@ngneat/forms-manager';
import { InvestmentOptionsFacade } from '../../core/investment-options.facade';

@Component({
  selector: 'wes-direct-debit-form',
  templateUrl: './direct-debit-form.component.html',
  styleUrls: ['./direct-debit-form.component.scss'],
})
export class DirectDebitFormComponent implements OnInit, OnDestroy {
  @Input() submitAttempt = false;
  content: DirectDebitDetails;

  form: FormGroup = this.builder.group(
    {
      accountHolderFullName: [
        null,
        [Validators.required, Validators.maxLength(100)],
      ],
      sortCode: [
        null,
        [
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.minLength(6),
          Validators.maxLength(6),
        ],
      ],
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

  constructor(
    private builder: FormBuilder,
    private formsManager: NgFormsManager,
    private investmentOptionsFacade: InvestmentOptionsFacade
  ) {
    this.investmentOptionsFacade.pageContent$.subscribe((content) => {
      this.content = content.directDebitDetails;
      console.log(content);
    });
  }

  ngOnInit(): void {
    this.formsManager.upsert('directDebit', this.form, {
      withInitialValue: true,
    });
  }

  isFieldInvalid(fieldName: string) {
    return (
      (this.form.get(fieldName).invalid && this.form.get(fieldName).dirty) ||
      (this.form.get(fieldName).invalid && this.submitAttempt)
    );
  }

  ngOnDestroy() {
    this.formsManager.unsubscribe('directDebit');
  }
  //   accountHolderFullName:
  //   type: string
  //   maxLength: 100
  // sortCode:
  //   type: string
  //   maxLength: 100
  // accountNumber:
  //   type: string
  //   maxLength: 100
  // bankName:
  //   type: string
  //   maxLength: 100
}
