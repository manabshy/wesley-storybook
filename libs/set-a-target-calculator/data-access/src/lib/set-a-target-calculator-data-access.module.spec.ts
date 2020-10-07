import { async, TestBed } from '@angular/core/testing';
import { SetATargetCalculatorDataAccessModule } from './set-a-target-calculator-data-access.module';

describe('SetATargetCalculatorDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SetATargetCalculatorDataAccessModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SetATargetCalculatorDataAccessModule).toBeDefined();
  });
});
