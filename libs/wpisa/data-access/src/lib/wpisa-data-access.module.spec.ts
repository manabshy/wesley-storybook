import { async, TestBed } from '@angular/core/testing';
import { WpisaDataAccessModule } from './wpisa-data-access.module';

describe('WpisaDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WpisaDataAccessModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WpisaDataAccessModule).toBeDefined();
  });
});
