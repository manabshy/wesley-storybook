import { async, TestBed } from '@angular/core/testing';
import { WpisaFeatureIsaJourneyModule } from './wpisa-feature-isa-journey.module';

describe('WpisaFeatureIsaJourneyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WpisaFeatureIsaJourneyModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WpisaFeatureIsaJourneyModule).toBeDefined();
  });
});
