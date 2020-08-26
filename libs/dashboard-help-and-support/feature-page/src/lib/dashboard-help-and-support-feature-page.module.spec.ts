import { async, TestBed } from '@angular/core/testing';
import { DashboardHelpAndSupportFeaturePageModule } from './dashboard-help-and-support-feature-page.module';

describe('DashboardHelpAndSupportFeaturePageModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DashboardHelpAndSupportFeaturePageModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DashboardHelpAndSupportFeaturePageModule).toBeDefined();
  });
});
