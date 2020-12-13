import {
  Component,
  OnInit,
  OnDestroy,
  ViewEncapsulation,
  ViewChild,
} from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  AbstractControl,
} from '@angular/forms';
import { NgFormsManager } from '@ngneat/forms-manager';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import {
  MonthlyPayment,
  DirectDebitDetails,
} from '@wesleyan-frontend/wpisa/data-access';
import { OverlayProgressSpinnerService } from '@wesleyan-frontend/shared/ui-progress-spinner';

import { DirectDebitFormComponent } from '../components/direct-debit-form/direct-debit-form.component';
import { InvestmentOptionsFacade } from '../core/services/investment-options.facade';
import { OnSubmitOrHasValueErrorStateMatcher } from '../core/error-state-matcher';
import { AppStateFacade } from '../core/services/app-state-facade';
import { isaRoutesNames } from '../isa-journey.routes.names';
import { currencyNumeric } from '../core/patterns';

@Component({
  selector: 'wes-monthly-payments-investment-page',
  templateUrl: './monthly-payments-investment-page.component.html',
  styleUrls: ['./monthly-payments-investment-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MonthlyPaymentsInvestmentPageComponent
  implements OnInit, OnDestroy {
  @ViewChild(DirectDebitFormComponent, { static: true })
  ddForm: DirectDebitFormComponent;

  pageContent: MonthlyPayment;
  directDebitContent: DirectDebitDetails;
  submitAttempt = false;
  showOverallError = false;
  investmentOptionLink = `/${isaRoutesNames.INVESTMENT_OPTIONS}`;
  errorStateMatcher = new OnSubmitOrHasValueErrorStateMatcher();

  subscriptions$ = new Subscription();
  form: FormGroup;
  amountControl: AbstractControl;
  directDebitControl: AbstractControl;

  constructor(
    private loadingService: OverlayProgressSpinnerService,
    private investmentOptionsFacade: InvestmentOptionsFacade,
    private appStateFacade: AppStateFacade,
    private router: Router,
    private formsManager: NgFormsManager,
    private fb: FormBuilder,
    private titleService: Title
  ) {
    this.subscriptions$.add(
      this.investmentOptionsFacade.pageContent$.subscribe((content) => {
        this.pageContent = content.monthlyPayments.monthlyPayment;
        this.directDebitContent = content.directDebitDetails;
        this.titleService.setTitle(this.pageContent.metaTitle);
      })
    );
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      amount: [
        null,
        {
          validators: [Validators.required],
          updateOn: 'blur',
        },
      ],
      directDebit: this.ddForm.createGroup(),
    });

    this.amountControl = this.form.get('amount');
    this.directDebitControl = this.form.get('directDebit');

    this.formsManager.upsert('monthlyPayment', this.form);

    if (this.appStateFacade.state.forms.monthlyPayment) {
      this.formsManager.patchValue(
        'monthlyPayment',
        this.appStateFacade.state.forms.monthlyPayment
      );
    }

    this.subscriptions$.add(
      this.investmentOptionsFacade.currentTaxPeriodISALimits$
        .pipe(
          tap((limits) =>
            this.form.controls.amount.setValidators([
              Validators.required,
              Validators.min(limits.minNewMonthlyAmount),
              Validators.max(limits.maxMonthlyAmount),
              Validators.pattern(currencyNumeric),
            ])
          )
        )
        .subscribe()
    );
  }

  onSubmit() {
    this.submitAttempt = true;
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.loadingService.show();
      //Need the timeout, sometimes the input values don't update
      setTimeout(() => {
        this.subscriptions$.add(
          this.investmentOptionsFacade.submitMonthlyForm().subscribe(() => {
            this.loadingService.hide();
            this.router.navigate([`/${isaRoutesNames.DECLARATION}`]);
          })
        );
      }, 300);
    } else {
      this.showOverallError = true;
    }
  }

  isFieldInvalid(fieldName: string) {
    return (
      (this.form.get(fieldName).invalid && this.form.get(fieldName).dirty) ||
      (this.form.get(fieldName).invalid && this.submitAttempt)
    );
  }

  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
    this.formsManager.unsubscribe('monthlyPayment');
  }
}
