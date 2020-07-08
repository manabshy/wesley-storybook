import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NG_FORMS_MANAGER_CONFIG,
  NgFormsManagerConfig,
} from '@ngneat/forms-manager';

import { SharedUiProgressSpinnerModule } from '@wesleyan-frontend/shared/ui-progress-spinner';
import { SharedUiFormRadioModule } from '@wesleyan-frontend/shared/ui-form-radio';
import { SharedUiFormCheckboxModule } from '@wesleyan-frontend/shared/ui-form-checkbox';
import { SharedUiFormFieldModule } from '@wesleyan-frontend/shared/ui-form-field';
import { SharedUiFormInputModule } from '@wesleyan-frontend/shared/ui-form-input';
import { SharedUiFormSelectModule } from '@wesleyan-frontend/shared/ui-form-select';

import { KnowledgeCheckPageComponent } from './knowledge-check-page/knowledge-check-page.component';
import { CustomerDetailsPageComponent } from './customer-details-page/customer-details-page.component';
import { CustomStepperComponent } from './components/custom-stepper/custom-stepper.component';
import { KnowledgeCheckQ1FormComponent } from './components/knowledge-check-q1-form/knowledge-check-q1-form.component';
import { KnowledgeCheckQ2FormComponent } from './components/knowledge-check-q2-form/knowledge-check-q2-form.component';
import { OnlyNumberDirective } from './only-numbers.directive';
import { ManualAddressFormComponent } from './components/manual-address-form/manual-address-form.component';
import { AddressLookupFormComponent } from './components/address-lookup-form/address-lookup-form.component';
import { InvalidControlScrollDirective } from './invalid-control-scroll.directive';
import { ISAJourneyRoutingModule } from './isa-journey-routing.module';
import { InvestmentOptionsPageComponent } from './investment-options-page/investment-options-page.component';
import { InvestmentOptionsFormComponent } from './components/investment-options-form/investment-options-form.component';
import { LumpSumInvestmentPageComponent } from './lump-sum-investment-page/lump-sum-investment-page.component';
import { MonthlyPaymentsInvestmentPageComponent } from './monthly-payments-investment-page/monthly-payments-investment-page.component';
import { LumpSumAndMonthlyPaymentInvestmentPageComponent } from './lump-sum-and-monthly-payment-investment-page/lump-sum-and-monthly-payment-investment-page.component';
import { DeclarationPageComponent } from './declaration-page/declaration-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { DirectDebitFormComponent } from './components/direct-debit-form/direct-debit-form.component';
import { KnowledgeCheckQ1PageComponent } from './knowledge-check-q1-page/knowledge-check-q1-page.component';
import { KnowledgeCheckQ2PageComponent } from './knowledge-check-q2-page/knowledge-check-q2-page.component';
import { ButtonLoaderDirective } from './button-loader.directive';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';
@NgModule({
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    ReactiveFormsModule,
    CdkStepperModule,
    ISAJourneyRoutingModule,
    SharedUiProgressSpinnerModule,
    SharedUiFormRadioModule,
    SharedUiFormCheckboxModule,
    SharedUiFormFieldModule,
    SharedUiFormInputModule,
    // SharedUiFormSelectModule,
  ],
  declarations: [
    FormFieldErrorComponent,
    KnowledgeCheckPageComponent,
    KnowledgeCheckQ1PageComponent,
    KnowledgeCheckQ2PageComponent,
    CustomerDetailsPageComponent,
    CustomStepperComponent,
    KnowledgeCheckQ1FormComponent,
    KnowledgeCheckQ2FormComponent,
    OnlyNumberDirective,
    InvalidControlScrollDirective,
    ManualAddressFormComponent,
    AddressLookupFormComponent,
    InvestmentOptionsPageComponent,
    InvestmentOptionsFormComponent,
    LumpSumInvestmentPageComponent,
    MonthlyPaymentsInvestmentPageComponent,
    LumpSumAndMonthlyPaymentInvestmentPageComponent,
    DeclarationPageComponent,
    PaymentPageComponent,
    DirectDebitFormComponent,
    ButtonLoaderDirective,
  ],
  providers: [
    {
      provide: NG_FORMS_MANAGER_CONFIG,
      useValue: new NgFormsManagerConfig({
        debounceTime: 200, // defaults to 300
      }),
    },
  ],
})
export class WpisaFeatureIsaJourneyModule {}
