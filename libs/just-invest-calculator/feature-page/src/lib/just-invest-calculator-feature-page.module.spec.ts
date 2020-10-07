import { async, TestBed } from '@angular/core/testing';
import { JustInvestCalculatorFeaturePageModule } from './just-invest-calculator-feature-page.module';

describe('JustInvestCalculatorFeaturePageModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [JustInvestCalculatorFeaturePageModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(JustInvestCalculatorFeaturePageModule).toBeDefined();
  });
});
