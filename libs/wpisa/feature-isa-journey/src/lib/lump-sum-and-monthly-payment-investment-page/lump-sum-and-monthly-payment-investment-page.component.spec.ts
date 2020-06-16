import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LumpSumAndMonthlyPaymentInvestmentPageComponent } from './lump-sum-and-monthly-payment-investment-page.component';

describe('LumpSumAndMonthlyPaymentInvestmentPageComponent', () => {
  let component: LumpSumAndMonthlyPaymentInvestmentPageComponent;
  let fixture: ComponentFixture<LumpSumAndMonthlyPaymentInvestmentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LumpSumAndMonthlyPaymentInvestmentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LumpSumAndMonthlyPaymentInvestmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
