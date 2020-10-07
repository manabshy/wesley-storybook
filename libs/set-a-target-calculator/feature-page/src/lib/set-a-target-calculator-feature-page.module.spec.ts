import { async, TestBed } from '@angular/core/testing';
import { SetATargetCalculatorFeaturePageModule } from './set-a-target-calculator-feature-page.module';

describe('SetATargetCalculatorFeaturePageModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SetATargetCalculatorFeaturePageModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SetATargetCalculatorFeaturePageModule).toBeDefined();
  });
});
