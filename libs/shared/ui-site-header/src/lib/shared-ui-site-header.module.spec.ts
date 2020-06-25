import { async, TestBed } from '@angular/core/testing';
import { SharedUiSiteHeaderModule } from './shared-ui-site-header.module';

describe('SharedUiSiteHeaderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiSiteHeaderModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiSiteHeaderModule).toBeDefined();
  });
});
