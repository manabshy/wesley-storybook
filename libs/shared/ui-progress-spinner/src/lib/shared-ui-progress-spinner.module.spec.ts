import { async, TestBed } from '@angular/core/testing';
import { SharedUiProgressSpinnerModule } from './shared-ui-progress-spinner.module';

describe('SharedUiProgressSpinnerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiProgressSpinnerModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiProgressSpinnerModule).toBeDefined();
  });
});
