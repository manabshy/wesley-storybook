import { async, TestBed } from '@angular/core/testing';
import { DashboardHelpAndSupportDataAccessModule } from './dashboard-help-and-support-data-access.module';

describe('DashboardHelpAndSupportDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DashboardHelpAndSupportDataAccessModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DashboardHelpAndSupportDataAccessModule).toBeDefined();
  });
});
