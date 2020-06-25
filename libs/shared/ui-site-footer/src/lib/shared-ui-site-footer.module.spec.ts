import { async, TestBed } from '@angular/core/testing';
import { SharedUiSiteFooterModule } from './shared-ui-site-footer.module';

describe('SharedUiSiteFooterModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiSiteFooterModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiSiteFooterModule).toBeDefined();
  });
});
