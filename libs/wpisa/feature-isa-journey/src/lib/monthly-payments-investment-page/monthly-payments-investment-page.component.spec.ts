import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyPaymentsInvestmentPageComponent } from './monthly-payments-investment-page.component';

describe('MonthlyPaymentsInvestmentPageComponent', () => {
  let component: MonthlyPaymentsInvestmentPageComponent;
  let fixture: ComponentFixture<MonthlyPaymentsInvestmentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyPaymentsInvestmentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyPaymentsInvestmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
