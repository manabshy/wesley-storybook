import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { KnowledgeCheckPageComponent } from './knowledge-check-page/knowledge-check-page.component';
import { CustomerDetailsPageComponent } from './customer-details-page/customer-details-page.component';
import { isaRoutesNames } from './isa-journey.routes.names';
import { InvestmentOptionsPageComponent } from './investment-options-page/investment-options-page.component';
import { LumpSumInvestmentPageComponent } from './lump-sum-investment-page/lump-sum-investment-page.component';
import { MonthlyPaymentsInvestmentPageComponent } from './monthly-payments-investment-page/monthly-payments-investment-page.component';
import { LumpSumAndMonthlyPaymentInvestmentPageComponent } from './lump-sum-and-monthly-payment-investment-page/lump-sum-and-monthly-payment-investment-page.component';
import { DeclarationPageComponent } from './declaration-page/declaration-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { KnowledgeCheckQ1PageComponent } from './knowledge-check-q1-page/knowledge-check-q1-page.component';
import { KnowledgeCheckQ2PageComponent } from './knowledge-check-q2-page/knowledge-check-q2-page.component';

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: isaRoutesNames.KNOWLEDGE_CHECK,
  },
  {
    path: isaRoutesNames.KNOWLEDGE_CHECK,
    component: KnowledgeCheckPageComponent,
    data: { step: 0 },
  },
  {
    path: isaRoutesNames.KNOWLEDGE_CHECK_Q1,
    component: KnowledgeCheckQ1PageComponent,
    data: { step: 0 },
  },
  {
    path: isaRoutesNames.KNOWLEDGE_CHECK_Q2,
    component: KnowledgeCheckQ2PageComponent,
    data: { step: 0 },
  },
  {
    path: isaRoutesNames.YOUR_DETAILS,
    component: CustomerDetailsPageComponent,
    data: { step: 1 },
  },
  {
    path: isaRoutesNames.INVESTMENT_OPTIONS,
    component: InvestmentOptionsPageComponent,
    data: { step: 2 },
  },
  {
    path: isaRoutesNames.LUMP_SUM_INVESTMENT,
    component: LumpSumInvestmentPageComponent,
    data: { step: 2 },
  },
  {
    path: isaRoutesNames.MONTHLY_PAYMENTS_INVESTMENT,
    component: MonthlyPaymentsInvestmentPageComponent,
    data: { step: 2 },
  },
  {
    path: isaRoutesNames.LUMP_SUM_AND_MONTHLY_PAYMENT_INVESTMENT,
    component: LumpSumAndMonthlyPaymentInvestmentPageComponent,
    data: { step: 2 },
  },
  {
    path: isaRoutesNames.DECLARATION,
    component: DeclarationPageComponent,
    data: { step: 3 },
  },
  {
    path: isaRoutesNames.PAYMENT,
    component: PaymentPageComponent,
    data: { step: 3 },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ISAJourneyRoutingModule {}
