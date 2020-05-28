import { async, TestBed } from '@angular/core/testing';
import { WpisaFeatureShellModule } from './wpisa-feature-shell.module';

describe('WpisaFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WpisaFeatureShellModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WpisaFeatureShellModule).toBeDefined();
  });
});
