import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NgFormsManager } from '@ngneat/forms-manager';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

import { OverlayProgressSpinnerService } from '@wesleyan-frontend/shared/ui-progress-spinner';
import { LumpSumPayment } from '@wesleyan-frontend/wpisa/data-access';

import { InvestmentOptionsFacade } from '../core/services/investment-options.facade';
import { OnSubmitOrHasValueErrorStateMatcher } from '../core/error-state-matcher';
import { AppStateFacade } from '../core/services/app-state-facade';
import { AppForms } from '../core/models/app-forms.interface';
import { isaRoutesNames } from '../isa-journey.routes.names';
import { currencyNumeric } from '../core/patterns';

@Component({
  selector: 'wes-lump-sum-investment-page',
  templateUrl: './lump-sum-investment-page.component.html',
  styleUrls: ['./lump-sum-investment-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LumpSumInvestmentPageComponent implements OnInit, OnDestroy {
  pageContent: LumpSumPayment;
  submitAttempt = false;
  showOverallError = false;
  investmentOptionLink = `/${isaRoutesNames.INVESTMENT_OPTIONS}`;
  errorStateMatcher = new OnSubmitOrHasValueErrorStateMatcher();
  subscriptions$ = new Subscription();

  form: FormGroup = this.fb.group({
    amount: [
      null,
      {
        validators: [Validators.required],
        updateOn: 'blur',
      },
    ],
  });

  constructor(
    private loadingService: OverlayProgressSpinnerService,
    private investmentOptionsFacade: InvestmentOptionsFacade,
    private appStateFacade: AppStateFacade,
    private router: Router,
    private formsManager: NgFormsManager<AppForms>,
    private fb: FormBuilder,
    private titleService: Title
  ) {
    this.subscriptions$.add(
      this.investmentOptionsFacade.pageContent$.subscribe((content) => {
        this.pageContent = content.singleLumpSum.lumpSumPayment;
        this.titleService.setTitle(this.pageContent.metaTitle);
      })
    );

    this.investmentOptionsFacade.currentTaxPeriodISALimits$
      .pipe(take(1))
      .subscribe((limits) => {
        this.form.controls.amount.setValidators([
          Validators.required,
          Validators.pattern(currencyNumeric),
          Validators.min(limits.minNewLumpSumAmount),
          Validators.max(limits.maxLumpSumAmount),
        ]);
      });

    this.formsManager.upsert('lumpSumPayment', this.form);

    if (this.appStateFacade.state.forms.lumpSumPayment) {
      this.formsManager.patchValue(
        'lumpSumPayment',
        this.appStateFacade.state.forms.lumpSumPayment
      );
    }
  }

  ngOnInit(): void {}

  isFieldInvalid(fieldName: string) {
    return (
      (this.form.get(fieldName).invalid && this.form.get(fieldName).dirty) ||
      (this.form.get(fieldName).invalid && this.submitAttempt)
    );
  }

  onSubmit() {
    this.submitAttempt = true;
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.loadingService.show();
      //Need the timeout, sometimes the input values doesn't update
      setTimeout(() => {
        this.subscriptions$.add(
          this.investmentOptionsFacade.submitLumpSumForm().subscribe(() => {
            this.loadingService.hide();
            this.router.navigate([`/${isaRoutesNames.DECLARATION}`]);
          })
        );
      }, 350);
    } else {
      this.showOverallError = true;
    }
  }

  ngOnDestroy() {
    this.formsManager.unsubscribe('lumpSumPayment');
    this.subscriptions$.unsubscribe();
  }
}
