import { Component, OnInit, OnDestroy } from '@angular/core';
import { isaRoutesNames } from '../isa-journey.routes.names';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NgFormsManager } from '@ngneat/forms-manager';
import { Title } from '@angular/platform-browser';
import { Declaration } from '@wesleyan-frontend/wpisa/data-access';
import { DeclarationFacade } from '../core/declaration.facade';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonalDetailsViewModel } from '../core/personal-details-view-model.interface';
import { DirectDebitViewModel } from '../core/direct-debit-view-model.interface';
import { tap, filter, switchMapTo } from 'rxjs/operators';
import { InvestmentOptionPaymentType } from '../core/investment-option-form-value.interface';

@Component({
  selector: 'wes-declaration-page',
  templateUrl: './declaration-page.component.html',
  styleUrls: ['./declaration-page.component.scss'],
})
export class DeclarationPageComponent implements OnInit, OnDestroy {
  pageContent: Declaration;
  personalDetailsContent$: Observable<PersonalDetailsViewModel> = this
    .declarationFacade.personalDetailsViewModelData$;
  directDebitContent$: Observable<DirectDebitViewModel> = this.declarationFacade
    .directDebitViewModelData$;
  investmentCardViewModelData$ = this.declarationFacade
    .investmentCardViewModelData$;
  selectedInvestmentOption$ = this.declarationFacade.selectedInvestmentOption$;
  investmentOptionsPageLinkMap = {
    [InvestmentOptionPaymentType.LUMP_SUM]: isaRoutesNames.LUMP_SUM_INVESTMENT,
    [InvestmentOptionPaymentType.MONTHLY]:
      isaRoutesNames.MONTHLY_PAYMENTS_INVESTMENT,
    [InvestmentOptionPaymentType.MONTHLY_AND_LUMP_SUM]:
      isaRoutesNames.LUMP_SUM_AND_MONTHLY_PAYMENT_INVESTMENT,
  };
  investmentOptionLink = `/${isaRoutesNames.INVESTMENT_OPTIONS}`;
  yourDetailsLink = `/${isaRoutesNames.YOUR_DETAILS}`;
  yourInvestmentLink = '';
  submitAttempt = false;
  subscriptions$ = new Subscription();

  form: FormGroup = this.fb.group({
    authorise: [null, [Validators.requiredTrue]],
    declaration: [null, [Validators.requiredTrue]],
  });
  formValid$ = this.formsManager.validityChanges('declaration');

  constructor(
    private declarationFacade: DeclarationFacade,
    private router: Router,
    private formsManager: NgFormsManager,
    private titleService: Title,
    private fb: FormBuilder
  ) {
    this.subscriptions$.add(
      this.declarationFacade.pageContent$.subscribe((content) => {
        this.pageContent = content;
        this.titleService.setTitle(content.metaTitle);
        console.log(this.pageContent);
      })
    );

    this.subscriptions$.add(
      this.selectedInvestmentOption$
        .pipe(
          tap((investmentOption) => {
            this.yourInvestmentLink = `/${this.investmentOptionsPageLinkMap[investmentOption]}`;
          })
        )
        .subscribe()
    );
  }
  ngOnInit(): void {
    this.formsManager.upsert('declaration', this.form, {
      withInitialValue: true,
    });
  }

  onSubmit() {
    this.submitAttempt = true;

    if (this.form.valid) {
      this.selectedInvestmentOption$
        .pipe(
          filter(
            (investmentOption) =>
              investmentOption === InvestmentOptionPaymentType.MONTHLY
          ),
          switchMapTo(
            this.declarationFacade.submitMonthlyISA().pipe(
              tap(console.log),
              tap((_) =>
                this.router.navigate([`/${isaRoutesNames.CONFIRMATION}`])
              )
            )
          )
        )
        .subscribe();
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
    this.formsManager.unsubscribe('declaration');
  }
}
