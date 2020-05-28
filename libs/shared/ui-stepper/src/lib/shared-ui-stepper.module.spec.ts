import { async, TestBed } from '@angular/core/testing';
import { SharedUiStepperModule } from './shared-ui-stepper.module';

describe('SharedUiStepperModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiStepperModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiStepperModule).toBeDefined();
  });
});
